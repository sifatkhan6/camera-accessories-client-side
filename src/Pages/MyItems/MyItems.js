import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {

    const [myItems, setMyItems] = useState([]);

    const [user] = useAuthState(auth);

    useEffect(() => {

        const getItems = async () => {
            const email = user.email;
            const url = `https://quiet-ridge-44662.herokuapp.com/myitem?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);
        }
        getItems();
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Want to delete?');
        if (proceed) {
            const url = `https://quiet-ridge-44662.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myItems.filter(product => product._id !== id);
                    setMyItems(remaining);
                })
        }
    }

    return (
        <div className='container'>
            <h2 className='mt-4 text-center'>Your Items</h2>
            <div className='row mt-4'>
                {
                    myItems.map(item => <div className='col-sm-12 col-md-6 col-lg-4 mb-5' key={item._id}>
                        <div className="card">
                            <img src={item.img} className="card-img-top w-100" alt='...' />
                            <div className="card-body">
                                <h4 className="card-title">{item.product_name}</h4>
                                <h5 className="card-title mt-2">Price: ${item.price}</h5>
                                <p className="card-text">{item.description.slice(0, 70)}...</p>
                                <h6 className="card-title"><small>Quantity: {item.quantity}</small></h6>
                                <h6 className="card-title"><small>Suppiler: {item.supplier_name}</small></h6>
                                <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;