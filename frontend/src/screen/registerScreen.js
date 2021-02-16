import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {register} from '../actions/userActions';

function RegisterScreen (props) {

    const [username,setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [RePassword, setRePassword] = useState('');
    const userRegister = useSelector(state=>state.userRegister);
    const {loading, userInfo, error} = userRegister;
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
        dispatch(register(username, email, password));
    }
    return    loading? <div>Loading...</div>:
    error? <div>{error}</div>:
    <div className="container2">
    <div className="text">
        <h3>Welcom to AwesomeShop</h3>
        <p>Enter Your Email and Password to Log In</p>
    </div>
    <form onSubmit={submitHandler}>
        <label for="username">Username</label>
        <input type="username" name="username" id="username" onChange={(e) => setUsername(e.target.value)} required placeholder="John Doe" /><br/><br/>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required placeholder="abc@gmail.com" /><br/><br/>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="3 or more characters" minlength="3" onChange={(e) => setPassword(e.target.value)}  required /><br/><br/>
        <label for="RePassword">Confirm Password</label>
        <input type="password" name="RePassword" id="RePassword" placeholder="3 or more characters" minlength="3" onChange={(e) => setRePassword(e.target.value)}  required /><br/><br/>
        <button type="submit">Register</button>
    </form>

</div>
}

export default RegisterScreen;