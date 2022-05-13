import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useInventoryItems from '../../hooks/useInventoryItems';
import IndividualItems from './IndividualItems';

const ManageInventories = () => {
    const [items] = useInventoryItems();
    return (
        <>
            <Container>
                <h1>This is Manage inventories route and this will show all the items from database.</h1>
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