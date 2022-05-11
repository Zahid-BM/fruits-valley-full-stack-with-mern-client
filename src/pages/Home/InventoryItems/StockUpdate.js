import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useStockUpdate from '../../../hooks/useStockUpdate';
import img from '../../../images/delivery-truck.png'

const StockUpdate = () => {
    const { id } = useParams();
    const [stockUpdate] = useStockUpdate(id);
    const handleDeliveryButton = () => {
        console.log(stockUpdate)
        const item = stockUpdate;
        const url = `http://localhost:8000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });
        toast('user info updated successfully');

  }
    return (
        <>
            <Container>
                <div>
                    <Card className='h-100 shadow'>
                        <Card.Img className='w-100 h-100' variant="top" src={stockUpdate.img} />
                        <Card.Body className='p-4 d-flex flex-column'>
                            <Card.Title className='fw-bold fs-1 mt-3 text-danger'>{stockUpdate.name}</Card.Title>
                            <Card.Subtitle className='text-muted my-3'> Price : $ {stockUpdate.price} /kg</Card.Subtitle>
                            <h6>ID : {stockUpdate._id} kgs</h6>
                            <h6>Quantity : {stockUpdate.quantity} kgs</h6>
                            <h6>Sold : {stockUpdate.sold} kgs</h6>
                            <h6 className='mb-5'>Supplier : {stockUpdate.supplierName}</h6>
                            <p className='fw-bold'>Description:</p>
                            <Card.Text>
                                {stockUpdate.description}
                            </Card.Text>


                            {<div className='mt-auto' >
                                <Button onClick={() => handleDeliveryButton(stockUpdate._id)} className='w-100 text-white fw-bold  hover1' variant="danger">Delivery <img className='ms-2' src={img} alt="" /></Button>
                            </div>}
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    );
};

export default StockUpdate;