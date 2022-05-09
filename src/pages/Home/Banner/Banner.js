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
                    <Col className='my-auto' lg={6}>
                        <h1 className='display-1 fw-bolder'>We ensure product quality and quantity</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quod illum quas velit inventore placeat. Aut autem laudantium sapiente dolore maxime alias asperiores, rerum voluptas sed sit? Quia voluptatibus quidem vero officiis omnis tenetur laboriosam pariatur facere nulla delectus provident porro molestiae hic at magni similique earum fugit, tempore, itaque quibusdam? Obcaecati ea deserunt .</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;