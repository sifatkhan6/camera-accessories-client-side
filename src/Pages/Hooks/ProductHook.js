import { useEffect, useState } from 'react';

const ProductHook = () => {

    const [productDetails, setproductDetails] = useState([]);

    useEffect( () => {
        fetch('https://quiet-ridge-44662.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setproductDetails(data))
    },[])

    return[productDetails, setproductDetails];
};

export default ProductHook;