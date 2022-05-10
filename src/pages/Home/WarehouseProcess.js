import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import image5 from '../../images/img-5.jpg';
import image6 from '../../images/img-6.jpg';
import image7 from '../../images/img-7.jpg';
import image8 from '../../images/img-8.jpg';
import image9 from '../../images/continuous-process.png';


const WarehouseProcess = () => {
    return (
        <>
            <Container className='my-5 pt-5 '>
                <h1 className='text-center fw-bold display-4 mb-4'>Warehouse Management Process</h1>

                <Row>
                    <Col className='my-auto  ' lg={4}>
                        <h3>Key Process <img src={image9} alt="" /></h3>
                        <ul className="list-group list-group-flush  ">
                            <li className="list-group-item  "><b>Lab Test :</b> We do immediately a lab test to detect harmful objects after i/h.</li>
                            <li className="list-group-item  "><b>Robotic Monitoring :</b> After Lab test we ensure a perfect storage with date wise and Purchase order based chronology. And the whole process is done by robots to save time and increase efficiencies.</li>
                            <li className="list-group-item  "><b>Quality Packaging :</b> We use 7ply cartons and gum tape wrapping to avoid damage and thus we ensure the longer protection during distance deliveries.</li>
                            <li className="list-group-item  "><b>Web Based Inventory :</b> We ensure all process to be input into system maintaining proper SOP and process. Our strength is our inventory management system and this is maintained by a team of expert Software Engineers.</li>
                        </ul>

                    </Col>
                    <Col className='pt-5 my-auto' lg={8}>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded-3 bg-gradient bg-opacity-50"
                                    src={image5}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3 className="display-2 ">Lab test</h3>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded-3"
                                    src={image6}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3 className="display-2  ">Robotic Management</h3>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded-3"
                                    src={image7}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3 className="display-2  ">Quality Packaging </h3>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded-3"
                                    src={image8}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3 className="display-2  ">Web Base Inventory</h3>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default WarehouseProcess;