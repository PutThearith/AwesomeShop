import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen (props) {
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        };
    }, [])
    return loading? <div>Loading ---</div>:
    error? <div>{"Error " + error}</div>:

    <ul className="products">
    {
        products .map(product => 
        <li key={product._id}>
            <div  className="item">
            <Link to={'./product/' + product._id}>
                <div className="discount">{product.discount}%</div>
                <img className="clothes" src={product.image} alt="" />
                <h4 className='name'>{product.name}</h4>
                <p>{product.description}</p>
                <h4 className="normal-price">${product.normalPrice}</h4>
                <h4 className="discounted-price">{product.discountPrice}</h4>
            </Link>
             <button className="cart">Cart</button>
          </div>

        </li>
        )
    }
</ul>
}

export default HomeScreen;