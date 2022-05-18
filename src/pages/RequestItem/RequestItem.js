import axios from 'axios';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import PageTitle from '../Shared/PageTitle/PageTitle';

const RequestItem = () => {
    const handleFormSubmit_for_newItem_creation = event => {
        event.preventDefault();
        const newItem = {

            name: event.target.itemName.value,
            description: event.target.description.value,
            price: event.target.description.value,
            quantity: event.target.quantity.value,
            supplierName: event.target.supplierName.value,
            img: event.target.image.value,


        };
        const url = 'https://fruits-warehouse.herokuapp.com/requested';

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
            <PageTitle title={'RequestItem'} pageColor={'add-item'}></PageTitle>
            <Container>
                <h2 className='text-center fw-bolder text-danger mb-5 display-4'>Please input to request your desired item
                    <br /><small className='fs-6 text-warning'>If Your Desired Item is not on our site then you can add below.</small></h2>
                <Form onSubmit={handleFormSubmit_for_newItem_creation} className='w-50 mx-auto d-flex flex-column shadow p-5 rounded-3 additem-bg '>


                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Control required className='text-center' type="text" name='itemName' placeholder='Item name' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword3">
                        <Form.Control required className='text-center' as="textarea" name='description' placeholder='Item description' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword4">
                        <Form.Control required className='text-center' type="number" name='price' placeholder="Market price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword5">
                        <Form.Control required className='text-center' type="number" name='quantity' placeholder="Required item quantity in kgs" />
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

export default RequestItem;