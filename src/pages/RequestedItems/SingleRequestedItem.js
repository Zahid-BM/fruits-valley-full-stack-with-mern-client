import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleRequestedItem = ({ item }) => {
    const {img, name, price, quantity, supplierName, description } = item;
    return (
        <>
            <Col className='g-4' lg={4}> {/* hover effect added */}
                <Card className='h-100 shadow'>
                    <Card.Img className='w-100 h-100' variant="top" src={img} />
                    <Card.Body className='p-4 d-flex flex-column'>
                        <Card.Title className='fw-bold fs-3 mt-3 text-danger'>{name}</Card.Title>
                        <Card.Subtitle className='text-muted fs-4 my-3'> Price : $ {price} /kg</Card.Subtitle>
                        <h6>Requested Quantity : {quantity} kgs</h6>
                        <h6 className='mb-5'>Supplier : {supplierName}</h6>
                        <p className='fw-bold'>Description:</p>
                        <Card.Text>
                            {description}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default SingleRequestedItem;