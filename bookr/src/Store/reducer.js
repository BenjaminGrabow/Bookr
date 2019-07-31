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

// const calculateRating = (array) => {
//   const goodRating = "fa fa-star checked"

//   let counterForGoodReview = [];

//   const howManyStars = array.length * 5; // because there are 5 stars

//   array.map(rating => {
//     counterForGoodReview.push(rating.star1 === goodRating);

//     counterForGoodReview.push(rating.star2 === goodRating);

//     counterForGoodReview.push(rating.star3 === goodRating);

//     counterForGoodReview.push(rating.star4 === goodRating);

//     counterForGoodReview.push(rating.star5 === goodRating);

//     return rating;
//   });

// let howManyGoodReviews = counterForGoodReview.filter(boolean => boolean === true).length;

//   const calculateAverage = ((howManyGoodReviews / howManyStars) / 2) * 10; // divided by 2 because we have 5 stars and not 10 
//   // and multiplied by 10 because we need a bigger number for the Math.round method to get the right solution

//   return Math.round(calculateAverage);
// };

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

    case types.DELETE_USER_PREFERENCE:

      return { ...state, userData: null };
    default: return state;
  }
};

export default reducer;