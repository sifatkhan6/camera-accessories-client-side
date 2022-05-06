import React from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';
import ProductHook from '../Hooks/ProductHook';

const HomeProducts = () => {

    const [productDetails, setproductDetails] = ProductHook();

    return (
        <div className='container ml-5'>
            <h2 className='mt-5 text-center'>Inventory</h2>
            <div className='row mt-5'>
                {
                    productDetails.slice(0, 6).map(productDetail => (
                        <HomeProduct
                            key={productDetail._id}
                            productDetail={productDetail}>
                        </HomeProduct>
                    ))
                }
            </div>
        </div>
    );
};

export default HomeProducts;