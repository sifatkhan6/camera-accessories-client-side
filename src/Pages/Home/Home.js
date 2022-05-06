import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import HomeProducts from '../HomeProducts/HomeProducts';
import ManageInventory from '../ManageInventory/ManageInventory';
import './Home.css'

const Home = () => {

    const [user] = useAuthState(auth);

    return (
        <div>
            <div className='home-container'>
                <h2 className='text text-center'>This is a Website to manage the Products...</h2>
            </div>



            <div className='container mx-auto ml-5'>
                <HomeProducts></HomeProducts>
            </div>




            {/* {
                user ?
                    <ManageInventory></ManageInventory>
                    :
                    <p className='error'>Please login to see inventory items</p>
            } */}
        </div>
    );
};

export default Home;