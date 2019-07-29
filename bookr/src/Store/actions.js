import axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER = 'REGISTER';
export const FETCH_BOOKS = 'FETCH_BOOKS';

const adress = 'http://localhost:3300/books';

export const register = creds => dispatch => {
  return axios.post('http://localhost:3500/register', creds)
    .then(res => {
      debugger
      dispatch({ type: REGISTER });
    })
    .catch(err => {
      debugger
    })
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios.post('http://localhost:3500/login', creds)
    .then(res => {

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('id', res.data.id);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.message });
    });
};


export const fetchBooks = () => dispatch => {
  const userID = localStorage.getItem('id');
  debugger
  axiosWithAuth().get(`${adress}/user/${userID}`)
    .then(res => {
debugger
      dispatch({ type: FETCH_BOOKS, fetchedBooks: res.data });
    })
  .catch(err => {
   debugger
  });
};
