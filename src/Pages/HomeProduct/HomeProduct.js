import React from 'react';
import { Link } from 'react-router-dom';

const HomeProduct = ({ productDetail }) => {

    const { product_name, img, _id, description, price, quantity, supplier_name } = productDetail;

    return (
        <div className=' col-sm-12 col-md-6 col-lg-4 mb-5'>
            <div class="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top w-100" alt='...' />
                <div className="card-body">
                    <h4 className="card-title">{product_name}</h4>
                    <h5 className="card-title mt-2">Price: ${price}</h5>
                    <p className="card-text">{description.slice(0, 75)} ...</p>
                    <h6 className="card-title"><small>Quantity: {quantity}</small></h6>
                    <h6 className="card-title"><small>Suppiler: {supplier_name}</small></h6>
                    <div className='text-center'>
                        <Link to="/checkout" className="btn btn-dark mt-2">Manage</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;