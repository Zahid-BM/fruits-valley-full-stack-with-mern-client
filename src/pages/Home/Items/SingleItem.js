import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import appImage1 from '../../../images/next.png';


const SingleItem = ({ item }) => {
    const { img, name, price, description, supplierName, stock, quantity } = item;
    return (
        <>
            <Col className='g-4 hover' lg={4}> {/* hover effect added */}
                <Card className='h-100 shadow'>
                    <Card.Img className='w-100 h-100' variant="top" src={img} />
                    <Card.Body className='p-4 d-flex flex-column'>
                        <Card.Title className='fw-bold fs-3 mt-3 text-danger'>{name}</Card.Title>
                        <Card.Subtitle className='text-muted fs-4 my-3'> Price : $ {price} /kg</Card.Subtitle>
                        <h6>Quantity : {quantity} kgs</h6>
                        <h6 className='mb-5'>Supplier : {supplierName}</h6>
                        <p className='fw-bold'>Description:</p>
                        <Card.Text>
                            {description}
                        </Card.Text>


                        {<Link className='mt-auto' to='/checkout'>
                            <Button className='w-100 text-white fw-bold' variant="danger">Stock Update <img src={appImage1} alt="" /></Button>
                        </Link>}
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default SingleItem;