import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {

    const { inventoryId } = useParams();

    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])

    return (
        <div className='container'>
            <div className='inventorySection'>
                <div className=''>
                    <img src={inventory.img} alt="" />
                </div>
                <div className='inventoryDetails'>
                    <h3>{inventory.product_name}</h3>
                    <h4>Price: ${inventory.price}</h4>
                    <p><small><strong>Product ID: {inventory._id}</strong></small></p>
                    <p><strong> Description:</strong> {inventory.description}</p>
                    <h6><small>Quantity: {inventory.quantity}</small></h6>
                    <h6><small>Supplier: {inventory.supplier_name}</small></h6>
                    <button>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;