import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

const [show, setShow] = useState(false);
console.log(show);

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 ms-20'>
                {
                    product.slice(0,19).map(singleProduct => <Product
                        key={singleProduct.id}
                        singleProduct={singleProduct}
                    ></Product>)
                }
            </div>
          {
            show? "": <div className='text-center'>
            <button className="btn btn-active btn-primary my-10" onClick={()=>setShow(!show)}>Show more</button>
            
       </div>
          }
        </div>
    );
};

export default Shop;  