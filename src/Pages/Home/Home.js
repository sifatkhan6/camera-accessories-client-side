import React from 'react';
import { Link } from 'react-router-dom';
import HomeProducts from '../HomeProducts/HomeProducts';
import './Home.css'

const Home = () => {

    return (
        <div>
            <div className='home-container'>
                <h2 className='text text-center'>This is a Website to manage the Products...</h2>
            </div>



            <div className='container mx-auto ml-5 text-center'>
                <HomeProducts></HomeProducts>
                <Link className='btn btn-dark mt-4' to={'/manageinventory'}>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Home;