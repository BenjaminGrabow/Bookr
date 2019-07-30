import * as types from './actions';

const initialState = {
  loading: false,
  error: null,
  loggingIn: false,
  books: [],
  book: '',
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

      return { ...state, books: action.search_result };

    default: return state;
  }
};

export default reducer;