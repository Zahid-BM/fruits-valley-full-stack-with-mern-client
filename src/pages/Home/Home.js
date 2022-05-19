import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Banner from './Banner/Banner';
import DailyReport from './DailyReport';
import Footer from './Footer';
import InventoryItems from './InventoryItems/InventoryItems';
import WarehouseProcess from './WarehouseProcess';


const Home = () => {

    return (
        <div>

            <PageTitle title={'Home'} pageColor={'home-bg'}></PageTitle>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <DailyReport></DailyReport>
            <WarehouseProcess></WarehouseProcess>
            <Footer></Footer>

        </div>
    );
};

export default Home;