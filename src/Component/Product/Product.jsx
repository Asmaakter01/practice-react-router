import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ singleProduct }) => {
    
    const { img, name, category, seller, price, stock, ratings, ratingsCount, shipping, quantity,id } = singleProduct;
    return (
       
            <div className='mb-6'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>Category: {category}</p>
                        <p>Seller: {seller}</p>
                        <p>Price: {price}</p>
                        <p>Stock: {stock}</p>
                        <p>Ratings: {ratings}</p>
                        <p>RatingsCount: {ratingsCount}</p>
                        <p>Shipping: {shipping}</p>
                        <p>Quantity: {quantity}</p>
                        <Link to={`/details/${id}`} className="card-actions justify-end">
                            <button className="btn btn-primary" >View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
           
       
    );
};

export default Product;