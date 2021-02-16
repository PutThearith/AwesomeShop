import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import {detailsProduct} from '../actions/productActions';

function ProductScreen (props) {
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        }
    }, []);


    return   loading? <div>Loading ...</div>:
    error? <div>{error}</div>:
    <div className="product">
        <div className="item">
            <div className="discount">{product.discount}%</div>
            <img className="clothes" src={product.image} alt="" />
            <img className="side-look" src="/img/clothes (1).png" alt="cannot find the image." />
            <img className="side-look" src="/img/clothes (1).png" alt="" />
            <img className="side-look" src="/img/clothes (1).png" alt="" />
            <p>{product.description}</p>
            <h4 className="normal-price"> ${product.normalPrice} </h4>
            <h4 className="discounted-price">${product.discountPrice}</h4>
            <button className="cart">Cart</button>
            <span className="title">Comments</span>
            <div className="comments">
                <div className="comment">
                    <div className="profile">
                        <img src="/img/picture.jpg" alt="" />
                        <div className="user-name">
                            <span className="username">Anonymous<br /></span>
                            <span className="date">Today 4:00pm 11.11.2020</span>
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="comment">
                    <div className="profile">
                        <img src="/img/picture.jpg" alt="" />
                        <div className="user-name">
                        <span className="username">Anonymous<br /></span>
                        <span className="date">Today 4:00pm 11.11.2020</span>
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="type-comment">
                    <textarea className="comment-box" placeholder="Type your Comment here"></textarea>
                    <button id="yes" type="submit"> Send </button>
                    <button id="no" type="submit"> Discard </button>
                </div>
            </div>
        </div>

    </div>
}

export default ProductScreen;