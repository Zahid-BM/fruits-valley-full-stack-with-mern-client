import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import image1 from '../../../images/img-1.png';
import image2 from '../../../images/img-2.png';
import image3 from '../../../images/img-3.png';

const Banner = () => {
    return (
        <div>
            <Container fluid className='my-4'>
                <Row>
                    <Col lg={6}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image1}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image2}
                                    alt="Second slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image3}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className='my-auto px-3' lg={6}>
                        <h1 className='display-1 fw-bolder text-warning'>We ensure product quality and quantity</h1>
                        <p className='fs-4 text-justify'>Fruits Valley is a reliable warehouse that not only ensure the best quality stock but also ensure the accurate inventory over the years. We have Capacity of 15000 tons unpacked cold storage and near about 1 million tons packed fruits. We have our own database and servers with plenty of experts to ensure accurate inventory management. We preserve yearly, monthly, weekly, daily and even per hour stock and ensure that is ready to serve at any time on demand .</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;