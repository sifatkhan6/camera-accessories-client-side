import React from 'react';
import ProductHook from '../Hooks/ProductHook';

const ManageInventory = () => {

    const [productDetails, setproductDetails] = ProductHook();

    const handleDelete = id => {
        const proceed = window.confirm('Want to delete?');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                const remaining = productDetails.filter(product => product._id !== id);
                setproductDetails(remaining);
            })
        }
    }

    return (
        <div className='container-fluid text-center'>
            <h2 className='mt-4'>All Products</h2>
            <div className='mt-3'>
                {
                    productDetails.map(product => <div className='' key={product._id}>
                        <h4>{product.product_name}<button onClick={() => handleDelete(product._id)}>Delete</button></h4>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;