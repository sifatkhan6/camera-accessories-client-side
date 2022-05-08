import React from 'react';
import ProductHook from '../Hooks/ProductHook';

const ManageInventory = () => {

    const [productDetails, setproductDetails] = ProductHook();

    const handleDelete = id => {
        const proceed = window.confirm('Want to delete?');
        if (proceed) {
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
        <div className='container'>
            <h2 className='mt-4 text-center'>All Products</h2>
            <div className='row mt-4'>
                {
                    productDetails.map(product => <div className='col-sm-12 col-md-6 col-lg-4 mb-5' key={product._id}>
                        <div className="card">
                            <img src={product.img} className="card-img-top w-100" alt='...' />
                            <div className="card-body">
                                <h4 className="card-title">{product.product_name}</h4>
                                <h5 className="card-title mt-2">Price: ${product.price}</h5>
                                <p className="card-text">{product.description.slice(0, 70)}...</p>
                                <h6 className="card-title"><small>Quantity: {product.quantity}</small></h6>
                                <h6 className="card-title"><small>Suppiler: {product.supplier_name}</small></h6>
                                <button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;