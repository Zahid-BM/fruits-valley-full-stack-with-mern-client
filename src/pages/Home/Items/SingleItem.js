import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleItem = ({ item }) => {
    const { img, name, price, description, supplierName, stock, quantity } = item;
    return (
        <>
            <Col className='g-4 hover' lg={4}> {/* hover effect added */}
                <Card className='h-100 shadow'>
                    <Card.Img className='w-100 h-100' variant="top" src={img} />
                    <Card.Body className='p-4 d-flex flex-column'>
                        <Card.Title className='fw-bold fs-3 mt-3 text-danger'>{name}</Card.Title>
                        <Card.Subtitle className='text-muted fs-4 my-3'> Price : $ {price} /kg</Card.Subtitle>
                        <h6>Quantity : {quantity} kgs</h6>
                        <h6 className='mb-5'>Supplier : {supplierName}</h6>
                        <p className='fw-bold'>Description:</p>
                        <Card.Text>
                            {description}
                        </Card.Text>


                        {<Link className='mt-auto' to='/checkout'>
                            <Button className='w-100 text-secondary fw-bold' variant="warning">Stock Update <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clipboard2-check-fill ms-2" viewBox="0 0 16 16">
                                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                                <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
                            </svg></Button>
                        </Link>}
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default SingleItem;