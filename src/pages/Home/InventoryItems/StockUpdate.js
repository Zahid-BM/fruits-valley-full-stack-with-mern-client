import { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useStockUpdate from '../../../hooks/useStockUpdate';
import img from '../../../images/delivery-truck.png'
import img1 from '../../../images/add.png'

const StockUpdate = () => {
    const { id } = useParams();
    const [counter, setCounter] = useState(0);
    const [stockUpdate] = useStockUpdate(id, counter);

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
                setCounter(counter + 1);
                console.log(data)
            });
        toast('Stock quantity updated after delivery !!!!');

    };
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



                            {<div className='mt-auto mx-auto my-5' >
                                <Button onClick={() => handleDeliveryButton(stockUpdate._id)} className=' text-white fw-bold  hover1' variant="danger">Delivery <img className='ms-2' src={img} alt="" /></Button>
                            </div>}
                            <div className='w-md-50 mx-auto bg-warning rounded p-4'>
                                <h4 className='text-center text-danger'>Restock Item</h4>
                                <Form responsive>
                                    <Form.Group className="mb-3 bg-warning p-4" controlId="formBasicEmail">
                                        <Form.Control type="text" name="number" placeholder="Enter qunatity" />
                                        <Form.Text className="text-muted d-none d-md-block">
                                            Input quantity will be added to the current stock quantity.
                                        </Form.Text>
                                    </Form.Group>


                                    <Button className='hover1 d-block mx-auto' variant="danger" type="submit">
                                        Restock <img className='ms-2' src={img1} alt="" />
                                    </Button>

                                </Form>
                            </div>

                        </Card.Body>
                    </Card>
                </div>

            </Container>
        </>
    );
};

export default StockUpdate;