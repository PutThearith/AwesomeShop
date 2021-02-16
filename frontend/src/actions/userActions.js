import Axios from 'axios';
import Cookie from 'js-cookie';
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from '../constants/userConstants';
import { USER_RESISTER_FAIL, USER_RESISTER_REQUEST, USER_RESISTER_SUCCESS } from '../constants/userConstants';


const signin = (email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: { email, password}});
    try{
        const {data} = await Axios.post("api/users/signin", {email, password});
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    }catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message })
    }

}

const register = (username, email, password) => async (dispatch) => {
    dispatch({type: USER_RESISTER_REQUEST, payload: { username, email, password}});
    try{
        const {data} = await Axios.post('/api/users/register', {username, email, password});
        dispatch({ type: USER_RESISTER_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    }catch (error) {
        dispatch({ type: USER_RESISTER_FAIL, payload: error.message })
    }

}
export {
    signin,
    register
}