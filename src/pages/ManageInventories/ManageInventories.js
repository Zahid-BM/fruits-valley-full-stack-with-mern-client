import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventoryItems from '../../hooks/useInventoryItems';
import IndividualItems from './IndividualItems';
import image2 from '../../images/add.png'
import Loading from '../Shared/Loading/Loading';

const ManageInventories = () => {
    const [items] = useInventoryItems();

    return (
        <>
            <Container>
                <h1 className='text-center fw-bold display-4 mt-3'>Manage Inventory Items</h1>
                {
                    items.length ?
                        <Row>
                            {
                                items.map(item => <IndividualItems key={item._id} item={item}></IndividualItems>)
                            }
                        </Row>
                        : <Loading></Loading>
                }
                <Link to='/addinventoryitem'><Button className='btn-lg mx-auto d-block text-white my-5 hover1' variant='danger'>Add New Item <img className='ms-1' src={image2} alt="" /></Button></Link>
            </Container>
        </>
    );
};

export default ManageInventories;