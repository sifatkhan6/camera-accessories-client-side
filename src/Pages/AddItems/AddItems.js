import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import '../../firebase.init'
import auth from '../../firebase.init';

const AddItems = () => {

    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();

        const myitem = {
            product_name: event.target.ProductName.value,
            price: event.target.Price.value,
            description: event.target.Description.value,
            quantity: event.target.Quantity.value,
            supplier_name: event.target.SupplierName.value,
            img: event.target.PhotoURL.value,
            email: user?.email
        }

        axios.post('https://quiet-ridge-44662.herokuapp.com/inventory', myitem)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                toast('Item Added');
                event.target.reset();
            }
        })

        // const url = `https://quiet-ridge-44662.herokuapp.com/inventory`;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(myitem)
        // })
        // .then(res => res.json())
        // .then(result => {
        //     console.log(result);
        // })
        // toast('Item Added');
    };

    return (
        <div className='container text-center'>
            <h2 className='mt-5'>Add Your Item</h2>
            <div className='w-50 mx-auto mt-4'>
                <form className='d-flex flex-column' onSubmit={handleAddItem}>

                    <input className='mb-3' type="text" name="ProductName" placeholder='ProductName' autoComplete='off' required/>

                    <input className='mb-3' type="text" autoComplete='off' name="SupplierName" placeholder='SupplierName' required />

                    <textarea className='mb-3' type="textarea" name="Description" placeholder='Description' required />

                    <input className='mb-3' type="number" name="Price" placeholder='Price' required />

                    <input className='mb-3' type="number" name="Quantity" placeholder='Quantity' required />

                    <input className='mb-3' type="text" name="PhotoURL" autoComplete='off' placeholder='PhotoURL' required/>

                    <input className='mb-3' type="email" name="email" placeholder='email' value={user?.email} readOnly />

                    <input type="submit" value="Add Item" />
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default AddItems;