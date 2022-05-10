import React from 'react';
import { Link } from 'react-router-dom';
import appImage1 from '../../images/Appstore.svg';
import appImage2 from '../../images/playstore.svg';
import appImage3 from '../../images/facebook(1).png';
import appImage4 from '../../images/linkedin(1).png';
import appImage5 from '../../images/twitter(1).png';
import appImage6 from '../../images/orange.png';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-danger mt-5 d-flex justify-content-around align-items-center'>
            <div className='text-center text-white py-5'>
                <h5>Download our Apps</h5>
                <img className='m-2' src={appImage1} alt="" />
                <img className='m-2' src={appImage2} alt="" />
            </div>
            <div className='text-center text-white py-5'>
                All right reserved &copy; Fruits Valley {year}
                <br />
                Email address : bmzahidulislam@outlook.com
                <br />
                Contact number : +880 1675633294
                <h4><img src={appImage6} alt="" /><span className='text-warning'>Fruits Valley</span> a reliable Warehouse</h4>
            </div>
            <div className='text-center text-white py-5'>
                <h5>Find us on</h5>
                <img className='m-2' src={appImage3} alt="" />
                <img className='m-2' src={appImage4} alt="" />
                <img className='m-2' src={appImage5} alt="" />
            </div>
        </footer>
    );
};

export default Footer;