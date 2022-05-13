import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img1 from '../../images/remove.png'

const IndividualItems = ({ item }) => {
    const { _id, img, name, price, supplierName, quantity } = item;
    console.log(item)
    const navigate = useNavigate();

    const navigateToInventory = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <>
            <Col className='g-5' lg={4}> {/* hover effect added */}
                <Card className='h-100 shadow'>
                    <Card.Img className='w-100 h-100' variant="top" src={img} />
                    <Card.Body className='p-4 d-flex flex-column'>
                        <Card.Title className='fw-bold fs-3 mt-3 text-danger'>{name}</Card.Title>
                        <Card.Subtitle className='text-muted fs-4 my-3'> Price : $ {price} /kg</Card.Subtitle>
                        <h6>Quantity : {quantity} kgs</h6>
                        <h6 className='mb-5'>Supplier : {supplierName}</h6>

                        {<div className='mt-auto' >
                            <Button onClick={() => navigateToInventory(_id)} className='w-100 text-secondary fw-bold  hover1' variant="warning">Remove Item <img className='ms-2' src={img1} alt="" /></Button>
                        </div>}
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default IndividualItems;