import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useStockUpdate from '../../../hooks/useStockUpdate';
import img from '../../../images/delivery-truck.png'

const StockUpdate = () => {
    const { id } = useParams();
    const [stockUpdate] = useStockUpdate(id);
    console.log(stockUpdate)
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
                                <Button /* onClick={() => navigateToInventory(_id)} */ className='w-100 text-white fw-bold  hover1' variant="danger">Delivery <img className='ms-2' src={img} alt="" /></Button>
                            </div>}
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    );
};

export default StockUpdate;