import { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useStockUpdate from '../../../hooks/useStockUpdate';
import img from '../../../images/delivery-truck.png';
import img1 from '../../../images/add.png';
import img2 from '../../../images/fruits.png';
import { useForm } from 'react-hook-form';

const StockUpdate = () => {
    const { id } = useParams();
    const [counter, setCounter] = useState(0);
    const [stockUpdate] = useStockUpdate(id, counter);
    const { register, handleSubmit, reset } = useForm();


    const handleDeliveryButton = () => {
        const qtty = stockUpdate.quantity;
        const updatedQtty = parseInt(qtty) - 1;
        const url = `https://fruits-warehouse.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ updatedQtty }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    setCounter(counter + 1);
                    toast('Stock quantity updated after delivery !!!!');
                };
            });

    };
    const onSubmit = data => {

        const updatedQtty = parseInt(data.quantity) + parseInt(stockUpdate.quantity);
        const url = `https://fruits-warehouse.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ updatedQtty })
        })
            .then(res => res.json())
            .then(newQtty => {
                setCounter(counter + 1);
                toast('Stock quantity updated after adding quantity !!!!');
            })

        reset();
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
                                <form className='d-flex flex-column shadow p-5 rounded-3 additem-bg' onSubmit={handleSubmit(onSubmit)}>
                                    <input className='text-center my-2' placeholder='Input Quantity' type="number" {...register("quantity")} />
                                    <small className='text-center text-muted'>To add item please click on the Submit Query button below</small>
                                    <input className='text-center mt-4 w-50 mx-auto bg-danger hover1 border-0 rounded-3 py-2 text-white' type="Submit" />
                                </form>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
                <Link to='/manageinventories'><Button className='btn-lg mx-auto d-block text-white my-5 hover1' variant='danger'>Manage Inventories <img className='ms-1' src={img2} alt="" /></Button></Link>
            </Container>
        </>
    );
};

export default StockUpdate;