import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import PageTitle from '../Shared/PageTitle/PageTitle';

const AddInventoryItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = 'http://localhost:8000/inventory';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

        reset();
    };
    return (
        <>
            <PageTitle title={'Addinventoryitems'} pageColor={'add-item'}></PageTitle>
            <Container className='my-5'>
                <h2 className='text-center fw-bolder text-danger mb-5 display-3'>Please input to add a new Item</h2>
                <form className='w-50 mx-auto d-flex flex-column shadow p-5 rounded-3 additem-bg' onSubmit={handleSubmit(onSubmit)}>
                    <input className='text-center my-2' placeholder='Item Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='text-center my-2' placeholder='Item Description' {...register("description")} />
                    <input className='text-center my-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='text-center my-2' placeholder='Quantity' type="text" {...register("quantity")} />
                    <input className='text-center my-2' placeholder='Supplier Name' type="text" {...register("supplierName")} />
                    <input className='text-center my-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <small className='text-center text-muted'>To add item please click on the Submit Query button below</small>
                    <input className='text-center mt-4 w-50 mx-auto bg-danger hover1 border-0 rounded-3 py-2 text-white' type="Submit" />
                </form>
            </Container>
        </>
    );
};

export default AddInventoryItems;