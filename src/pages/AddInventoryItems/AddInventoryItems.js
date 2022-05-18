import axios from 'axios';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';

const AddInventoryItems = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    const handleFormSubmit_for_newItem_creation = event => {
        event.preventDefault();
        const newItem = {
            userName: user?.displayName,
            email: user?.email,
            name: event.target.itemName.value,
            description: event.target.description.value,
            price: event.target.description.value,
            quantity: event.target.quantity.value,
            sold: event.target.sold.value,
            supplierName: event.target.supplierName.value,
            img: event.target.image.value,


        };
        const url = 'https://fruits-warehouse.herokuapp.com/add';

        axios.post(url, newItem)
            .then(res => {
                const { data } = res;
                console.log(res);
                if (data.insertedId) {
                    toast('Success !!! You have added a new item.')
                    event.target.reset();
                }
            })
            .catch(error => {
                console.dir(error)
            })
    };


    return (
        <>
            <PageTitle title={'Addinventoryitems'} pageColor={'add-item'}></PageTitle>
            <Container className='my-5'>
                <h2 className='text-center fw-bolder text-danger mb-5 display-3'>Please input to add a new Inventory Item</h2>
                <Form onSubmit={handleFormSubmit_for_newItem_creation} className='w-50 mx-auto d-flex flex-column shadow p-5 rounded-3 additem-bg '>
                    <Form.Group className="mb-3" controlId="formBasicPassword1">
                        <Form.Control className='text-center' readOnly type="text" value={user ? user?.displayName : ''} name='userName' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='text-center' readOnly type="email" value={user ? user?.email : ''} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Control required className='text-center' type="text" name='itemName' placeholder='item name' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword3">
                        <Form.Control required className='text-center' as="textarea" name='description' placeholder='Item description' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword4">
                        <Form.Control required className='text-center' type="number" name='price' placeholder="item price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword5">
                        <Form.Control required className='text-center' type="number" name='quantity' placeholder="item quantity in kgs" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword6">
                        <Form.Control required className='text-center' type="number" name='sold' placeholder="sold quantity in kgs" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword7">
                        <Form.Control required className='text-center' type="text" name='supplierName' placeholder="supplier's name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword8">
                        <Form.Control required className='text-center' type="text" name='image' placeholder="item's photo url" />
                    </Form.Group>

                    <Button className='w-50 mx-auto bg-danger hover1 border-0' variant="primary" type="submit">
                        Add Item
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default AddInventoryItems;