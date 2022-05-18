import axios from 'axios';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import PageTitle from '../Shared/PageTitle/PageTitle';
import image10 from '../../images/requestItem.png'

const RequestItem = () => {
    const handleFormSubmit_for_newItem_creation = event => {
        event.preventDefault();
        const newItem = {

            name: event.target.itemName.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplierName: event.target.supplierName.value,
            img: event.target.image.value,


        };
        const url = 'https://fruits-warehouse.herokuapp.com/requested';

        axios.post(url, newItem)
            .then(res => {
                const { data } = res;
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
            <Container className='mb-4'>
                <h3 className='text-center fw-bolder text-warning mb-5 mt-3 display-6'>
                    If Your Desired Item is not on our site then you can add below</h3>

                <Row>
                    <Col lg={7}>
                        <img className='w-100' src={image10} alt="" />
                    </Col>
                    <Col lg={5}>
                        <Form style={{
                            backgroundImage: `url("https://img.freepik.com/free-photo/close-up-employee-with-computer-keyboard_1098-2019.jpg?w=740&t=st=1652896960~exp=1652897560~hmac=ab824b8cb92d7027b43368dd8559c5ee49341bf56f4548033026541a7df30cb4")`, opacity: '90%'
                        }} onSubmit={handleFormSubmit_for_newItem_creation} className='d-flex flex-column shadow p-5 rounded-3'>


                            <Form.Group className="mb-3" controlId="formBasicPassword2">
                                <h3 className='text-center mb-3'>Please Input</h3>
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
                                Request Item
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default RequestItem;