import axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER = 'REGISTER';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOK = 'FETCH_BOOK';
export const CLOSE_BOOK = 'CLOSE_BOOK';
export const ADD_REVIEW = 'ADD_REVIEW';


const adress = 'https://bookr-build-week.herokuapp.com/';
// ${adress}auth/register
// ${adress}auth/login
// ADD IT LATER !!!!
export const register = creds => dispatch => {
  return axios.post(`http://localhost:3400/auth/register`, creds)
    .then(res => {

      dispatch({ type: REGISTER });
    })
    .catch(err => {
      debugger
    })
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios.post(`http://localhost:3400/auth/login`, creds)
    .then(res => {
      debugger
      localStorage.setItem('username', creds.username);
      localStorage.setItem('token', res.data.token);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      debugger
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.message });
    });
};


export const fetchBooks = () => dispatch => {

  axiosWithAuth().get(adress)
    .then(res => {

      dispatch({ type: FETCH_BOOKS, fetchedBooks: res.data });
    })
  .catch(err => {

  });
};

export const fetchBook = (id) => dispatch => {

  axiosWithAuth().get(`${adress}${id}`)
    .then(res => {

      dispatch({ type: FETCH_BOOK, fetchedBook: res.data });
    })
  .catch(err => {

  });
};

export const closeBook  = () => {
return { type: CLOSE_BOOK }
};

export const addReview = (review) => dispatch => {

  axios.post(`http://localhost:3400/review`, )
    .then(res => {

      dispatch({ type: FETCH_BOOK, fetchedBook: res.data });
    })
  .catch(err => {

  });
};
