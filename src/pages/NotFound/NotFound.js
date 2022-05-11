import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/404.png'

const NotFound = () => {
    return (
        <Container className='py-5 my-5'>
            <div className='w-50 mx-auto my-5'>
                <img className='w-100' src={img} alt="" />
                <h3 className='text-danger text-center fs-md-2'>The path is unavailable</h3>
            </div>
        </Container>
    );
};

export default NotFound;