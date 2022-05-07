import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };

    return (
        <div className='container text-center'>
            <h2 className='mt-5'>Add Your Item</h2>
            <div className='w-50 mx-auto mt-4'>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' placeholder='Product Name' {...register("product_name", { required: true, maxLength: 20 })} />
                    <input className='mb-3' placeholder='Supplier Name' {...register("supplier_name")} />
                    <textarea className='mb-3' placeholder='Description' {...register("description")} />
                    <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='mb-3' placeholder='Photo URL' {...register("img")} />
                    <input type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;