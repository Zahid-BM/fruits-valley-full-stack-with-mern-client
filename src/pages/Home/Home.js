import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Banner from './Banner/Banner';
import DailyReport from './DailyReport';
import Footer from './Footer';
import Items from './Items/Items';
import WarehouseProcess from './WarehouseProcess';


const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'} pageColor={'home-bg'}></PageTitle>
            <Banner></Banner>
            <Items></Items>
            <DailyReport></DailyReport>
            <WarehouseProcess></WarehouseProcess>
            <Footer></Footer>
        </div>
    );
};

export default Home;