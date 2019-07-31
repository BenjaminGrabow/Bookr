import * as types from './actions';

const initialState = {
  loading: false,
  error: null,
  loggingIn: false,
  books: [],
  copyOfBooks: null,
  book: '',
  userData: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER:
      return { ...state };

    case types.LOGIN_START:
      return { ...state, loggingIn: true };

    case types.LOGIN_SUCCESS:
      return { ...state, loggingIn: false };

    case types.LOGIN_FAIL:
      return { ...state, loggingIn: false, error: action.payload }

    case types.FETCH_BOOKS:

      return { ...state, books: action.fetchedBooks };

    case types.FETCH_BOOK:

      return { ...state, book: action.fetchedBook };

    case types.CLOSE_BOOK:

      return { ...state, book: '' };

    case types.SEARCH_BOOK:

      return { ...state, copyOfBooks: state.books, books: action.search_result };

    case types.SHOW_ALL_BOOKS_AGAIN:

      return { ...state, books: state.copyOfBooks };

    case types.SAFE_USER_PREFERENCE:
      const newUser = action.user_preference;

      return { ...state, userData: newUser };

    case types.CHECK_USER_PREFERENCE:

      return { ...state, userData: action.user_preference };

    case types.UPDATE_USER_PREFERENCE:

      return { ...state, userData: action.user_preference };
    default: return state;
  }
};

export default reducer;