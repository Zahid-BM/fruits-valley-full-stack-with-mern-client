import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../../../images/banner/1.jpg';
import img2 from '../../../images/banner/2.jpg';
import img3 from '../../../images/banner/3.jpg';
import img4 from '../../../images/banner/4.jpg';
import img5 from '../../../images/banner/5.jpg';
import img6 from '../../../images/banner/6.jpg';

const Banner = () => {
    return (

        <Container fluid >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100  "
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="display-1 fw-bolder text-warning d-none d-md-block mb-5">Technology based Warehouse</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  "
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="display-1 fw-bolder text-warning d-none d-md-block mb-5">Expert Monitoring and managements</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  "
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="display-1 fw-bolder text-warning d-none d-md-block mb-5">Faster Unloading and i/h</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  "
                        src={img4}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3 className="display-1 fw-bolder text-warning d-none d-md-block mb-5">Ensure fruits remain fresh</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  "
                        src={img5}
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        <h3 className="display-1 fw-bolder text-warning d-none d-md-block mb-5">Special Port Facilities</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  "
                        src={img6}
                        alt="Sixth slide"
                    />

                    <Carousel.Caption>
                        <h3 className="display-1 fw-bolder text-warning d-none d-md-block mb-5">Fastest delivery on requirements</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>

    );
};

export default Banner;