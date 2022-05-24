import React from 'react';
import appImage1 from '../../images/Appstore.svg';
import appImage2 from '../../images/playstore.svg';
import appImage3 from '../../images/facebook(1).png';
import appImage4 from '../../images/linkedin(1).png';
import appImage5 from '../../images/twitter(1).png';
import appImage6 from '../../images/orange.png';
import { Col, Container, Row } from 'react-bootstrap';
import '../../pages/common.css';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>



            <footer className='bg-danger mt-5 '>
                <Container fluid>
                    <Row>
                        <Col className='my-auto' lg={4}>
                            <div className='text-center text-white py-5'>
                                <h5>Download our Apps</h5>
                                <img className='m-2 hover2' src={appImage1} alt="" />
                                <img className='m-2 hover2' src={appImage2} alt="" />
                            </div>
                        </Col>
                        <Col className='my-auto' lg={4}>
                            <div className='text-center text-white py-5'>
                                All right reserved &copy; Fruits Valley {year}
                                <br />
                                Email address : bmzahidulislam@outlook.com
                                <br />
                                Contact number : +880 1675633294
                                <h4><img src={appImage6} alt="" /><span className='text-warning'>Fruits Valley</span> a reliable Warehouse</h4>
                            </div>
                        </Col>
                        <Col className='my-auto' lg={4}>
                            <div className='text-center text-white py-5'>
                                <h5>Find us on</h5>
                                <img className='m-2 hover2' src={appImage3} alt="" />
                                <img className='m-2 hover2' src={appImage4} alt="" />
                                <img className='m-2 hover2' src={appImage5} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;