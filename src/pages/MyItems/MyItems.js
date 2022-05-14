import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth);

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
                console.log(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        };
        getMyItems();
    }, [user]);
    return (
        <div>
            <h2 className='text-center mb-4'>My Items : {myItems.length}</h2>
            {
                myItems.map(myItem => <div key={myItem._id}>
                    <h4 className='text-center'>Ordered by :  {user?.email} <br /> Ordered Service : {myItem.name}</h4>
                </div>)
            }
        </div>
    );
};

export default MyItems;