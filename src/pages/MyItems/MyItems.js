import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import image1 from '../../images/remove.png';
import image2 from '../../images/harvest.png';


const MyItems = () => {
    const [user, loading] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            console.log(user?.email)
            const url = `http://localhost:8000/inventory?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItems(data)
            }
            catch (error) {
                console.log(error?.message)
                if (error?.response?.status === 401 || error?.response?.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        };
        getMyItems();
    }, [user]);
    const handleRemoveBtn = id => {
        const userConfirmation = window.confirm('Once delete then it can not be restored. Are you sure to delete this Item ?')
        if (userConfirmation) {
            const url = `http://localhost:8000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    if (result.deletedCount === 1) {
                        const remaining = myItems.filter(myItem => myItem._id !== id);
                        setMyItems(remaining)
                        toast('Item deleted permanently')
                    }
                })
        }
    };


    return (
        <>
            <Container>
                <div className='my-5'>
                    <h2 className='text-center mb-4 display-4 fw-bold text-danger'>My Items <img className='ms-3' src={image2} alt="" /></h2>

                    <Table responsive variant='danger' className='text-center mt-4 rounded'>
                        <thead>
                            <tr>

                                <th className='fs-6'>User email</th>
                                <th className='fs-6'>Item Name</th>
                                <th className='fs-6'>Item Image</th>
                                <th className='fs-6'>Remove</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                myItems.map(myItem => <tr key={myItem?._id}>
                                    <td>{user?.email}</td>
                                    <td>{myItem?.name}</td>
                                    <td><img className='my-item-img' src={myItem?.img} alt="" /></td>
                                    <td><img onClick={() => handleRemoveBtn(myItem?._id)} className='hover1 w-25' src={image1} alt="" /></td>
                                </tr>)
                            }



                        </tbody>
                    </Table>
                </div>
            </Container>

        </>
    );
};

export default MyItems;