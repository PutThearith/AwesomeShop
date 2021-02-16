import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {signin} from '../actions/userActions';

function SigninScreen (props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state=>state.userSignin);
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
        return () => {
            //
        }
    }, [userInfo])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }
    return    loading? <div>Loading...</div>:
    error? <div>{error}</div>:
    <div className="container2">
    <div className="text">
        <h3>Welcom to AwesomeShop</h3>
        <p>Enter Your Email and Password to Log In</p>
    </div>
    <form onSubmit={submitHandler}>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required placeholder="abc@gmail.com" /><br/><br/>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="3 or more characters" minlength="3" onChange={(e) => setPassword(e.target.value)}  required /><br/><br/>
        <button type="submit">Log In</button>
    </form>
    <p className="no-account">Don't have an Accout? Click <Link to='/Register' >HERE</Link> to register.</p>

</div>
}

export default SigninScreen;