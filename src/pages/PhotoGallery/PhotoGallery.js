import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../../images/gallery/g-1.jpg'
import img2 from '../../images/gallery/g-2.jpg'
import img3 from '../../images/gallery/g-3.jpg'
import img4 from '../../images/gallery/g-4.jpg'
import img5 from '../../images/gallery/g-5.jpg'
import PageTitle from '../Shared/PageTitle/PageTitle';

const PhotoGallery = () => {
    return (
        <>
            <PageTitle title={'Gallery'} pageColor={'blogs-bg'}></PageTitle>
            <Container className='my-3' >

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100  "
                            src={img1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100  "
                            src={img2}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100  "
                            src={img3}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100  "
                            src={img4}
                            alt="Fourth slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100  "
                            src={img5}
                            alt="Fifth slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
};

export default PhotoGallery;