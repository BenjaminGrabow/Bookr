import axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER = 'REGISTER';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOK = 'FETCH_BOOK';
export const CLOSE_BOOK = 'CLOSE_BOOK';
export const SEARCH_BOOK = 'SEARCH_BOOK';
export const SHOW_ALL_BOOKS_AGAIN = 'SHOW_ALL_BOOKS_AGAIN';
export const CHECK_USER_PREFERENCE = 'CHECK_USER_PREFERENCE';
export const SAFE_USER_PREFERENCE = 'SAFE_USER_PREFERENCE';
export const UPDATE_USER_PREFERENCE = 'UPDATE_USER_PREFERENCE';

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
      localStorage.setItem('user_id', res.data.id);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      debugger
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.message });
    });
};


export const fetchBooks = () => dispatch => {

  axiosWithAuth().get('http://localhost:3400/')
    .then(res => {

      dispatch({ type: FETCH_BOOKS, fetchedBooks: res.data });
    })
    .catch(err => {

    });
};

export const fetchBook = (id) => dispatch => {

  axiosWithAuth().get(`http://localhost:3400/${id}`)
    .then(res => {

      dispatch({ type: FETCH_BOOK, fetchedBook: res.data });
    })
    .catch(err => {

    });
};

export const closeBook = () => {
  return { type: CLOSE_BOOK }
};

export const addReview = (review, book_id) => dispatch => {
  debugger

  const objectReview = {
    review: review,
    reviewer: localStorage.getItem('username'),
    book_id: book_id,
    photo: 'add functionality later with localstorage when user saves picture'
  }
  debugger
  axios.post(`http://localhost:3400/review`, objectReview)
    .then(res => {
      return axiosWithAuth().get(`http://localhost:3400/${book_id}`)
        .then(res => {
          dispatch({ type: FETCH_BOOK, fetchedBook: res.data });
        })
    })
    .catch(err => {

    })
    .catch(err => {
      debugger
    });
};

export const search = (searchResultAsArray) => {
  return { type: SEARCH_BOOK, search_result: searchResultAsArray }
};

export const showAllBooksAgain = () => {
  return { type: SHOW_ALL_BOOKS_AGAIN }
};

export const checkUserPreference = () => dispatch => {

  const userId = localStorage.getItem('user_id');

  return axios.get(`http://localhost:3400/user/${userId}`)
    .then(res => {
      dispatch({ type: CHECK_USER_PREFERENCE, user_preference: res.data });
    })
    .catch(err => {
      debugger
    });
};

export const safeUserPreferences = (firstname, lastname, photo) => dispatch => {

  const userId = localStorage.getItem('user_id');
  debugger
  const newUserPreference = {
    first_name: firstname,
    last_name: lastname,
    user_id: userId,
    photo: photo
  };

  
  axios.post(`http://localhost:3400/user`, newUserPreference)
    .then(res => {
 
      return axios.get(`http://localhost:3400/user/${userId}`)
        .then(res => {
          dispatch({ type: SAFE_USER_PREFERENCE, user_preference: res.data });
        });
    })
    .catch(err => {
      debugger
    });
};

export const updateUserPreference = (firstname, lastname, photo) => dispatch => {

  const userId = localStorage.getItem('user_id');
  debugger
  const newUserPreference = {
    first_name: firstname,
    last_name: lastname,
    user_id: userId,
    photo: photo
  };

  
  axios.put(`http://localhost:3400/user/${userId}`, newUserPreference)
    .then(res => {
 
      return axios.get(`http://localhost:3400/user/${userId}`)
        .then(res => {
          dispatch({ type: UPDATE_USER_PREFERENCE, user_preference: res.data });
        });
    })
    .catch(err => {
      debugger
    });
};
