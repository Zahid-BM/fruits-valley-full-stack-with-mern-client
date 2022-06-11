import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import img1 from '../../../images/banner/1.jpg';
import img2 from '../../../images/banner/2.jpg';
import img3 from '../../../images/banner/3.jpg';
import img4 from '../../../images/banner/4.jpg';
import img5 from '../../../images/banner/5.jpg';
import img6 from '../../../images/banner/6.jpg';

const Banner = () => {
    return (

        < >
            <Carousel>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={img1} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className=' display-2 text-white-50 d-none d-sm-block text-center'>Technology based Warehouse</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={img2} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className=' display-2 text-white-50 d-none d-sm-block text-center'>Expert Monitoring and managements</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={img3} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className=' display-2 text-white-50 d-none d-sm-block text-center'>Faster Unloading and i/h</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={img4} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className=' display-2 text-white-50 d-none d-sm-block text-center'>We ensure fruits remain fresh</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={img5} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className=' display-2 text-white-50 d-none d-sm-block text-center'>Special Port Facilities</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="bg-dark text-white">
                        <Card.Img className='opacity-25' src={img6} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className=' display-2 text-white-50 d-none d-sm-block text-center'>Fastest delivery on requirements</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </>

    );
};

export default Banner;