import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Banner from './Banner/Banner';
import Items from './Items/Items';


const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'} pageColor={'home-bg'}></PageTitle>
            <Banner></Banner>
            <Items></Items>
        </div>
    );
};

export default Home;