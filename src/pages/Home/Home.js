import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Banner from './Banner/Banner';
import DailyReport from './DailyReport';
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
        </div>
    );
};

export default Home;