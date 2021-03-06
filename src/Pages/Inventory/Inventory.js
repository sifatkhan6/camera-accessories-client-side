import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './Inventory.css'

const Inventory = () => {

    const { inventoryId } = useParams();

    const [inventory, setInventory] = useState({});
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        const url = `https://quiet-ridge-44662.herokuapp.com/inventory/${inventoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [isReload]);

    // decreasing quantity 
    const handleDavivered = (id) => {
        const quantity = inventory.quantity;
        let newQuantity = quantity - 1;
        const newProduct = {...inventory, quantity: newQuantity};
        setInventory(newProduct);
        if(newQuantity > -1){
            const url = `https://quiet-ridge-44662.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newProduct)
            })
            .then(res => res.json())
            .then(data => setIsReload(!isReload));
        }
    }

    // updating stock 
    const handleUpdateStock = event => {
        event.preventDefault();

        const stock = event.target.AddQuantity.value;
        const newStock = parseInt(stock);
        const oldStock = parseInt(inventory.quantity);
        const restock =  oldStock + newStock;
        const newProduct = {...inventory, quantity: restock};

        const url = `https://quiet-ridge-44662.herokuapp.com/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            setIsReload(!isReload);
            event.target.reset();
        })
        toast('Quantity Added Successfully.')
    }

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
                    <button className='btn btn-secondary mt-4' onClick={() => handleDavivered(inventoryId)}>Delivered</button>
                </div>
            </div>

            <div className='text-center mt-5 mx-auto w-25'>
                <form className='d-flex flex-column' onSubmit={handleUpdateStock}>
                    <input className='mb-2' type="number" name="AddQuantity" placeholder='Add Quantity' id="" />
                    <div className='text-center'>
                        <input className='btn btn-success w-50' type="submit" value="Add Quantity" />
                    </div>
                </form>
            </div>

            <div className='text-center'>
                <Link className='btn btn-dark mt-5' to={'/manageinventory'}>Manage Inventories</Link>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Inventory;