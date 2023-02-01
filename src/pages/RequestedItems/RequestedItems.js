import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';
import SingleRequestedItem from './SingleRequestedItem';
import Loading from '../Shared/Loading/Loading'

const RequestedItems = () => {
    const [requestedItems, setRequestedItems] = useState([]);

    useEffect(() => {

        const url = 'https://fruits-valley.onrender.com/requested';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setRequestedItems(data)
            })
    }, []);


    return (
        <>
            <Container className='mb-4'>

                <PageTitle title={'RequestedItems'} pageColor={'blogs-bg'}></PageTitle>
                <h1 className='text-center text-danger fw-bold display-4 mt-4'>All Requested Items by Users <br /><small className='fs-6 text-warning'>Please check the items bellow that you want to add. If not available here then visit Request Item Nav link and add your item</small></h1>

                {
                    requestedItems.length ?
                        <Row>
                            {
                                requestedItems.map(item => <SingleRequestedItem key={item._id} item={item}></SingleRequestedItem>)
                            }
                        </Row> : <Loading></Loading>
                }
            </Container>


        </>
    );
};

export default RequestedItems;