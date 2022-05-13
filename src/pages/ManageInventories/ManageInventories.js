import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useInventoryItems from '../../hooks/useInventoryItems';
import IndividualItems from './IndividualItems';

const ManageInventories = () => {
    const [items] = useInventoryItems();
    return (
        <>
            <Container>
                <h1 className='text-center fw-bold display-4 mt-3'>All Inventory Items</h1>
                <Row>
                    {
                        items.map(item => <IndividualItems key={item._id} item={item}></IndividualItems>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default ManageInventories;