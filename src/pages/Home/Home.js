import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'} pageColor={'home-bg'}></PageTitle>
            <h1 className='text-center text-success'>This is Home</h1>
        </div>
    );
};

export default Home;