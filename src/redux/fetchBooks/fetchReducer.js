import {
  FETCHING_BOOK,
  FETCHING_BOOK_SUCCESS,
  FETCHING_BOOK_FAILURE,
} from "./actionTypes";

const initState = {
  loading: false,
  error: "",
  bookList: [],
};

export const fetchReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHING_BOOK:
      return {
        ...state,
        loading: true,
      };
    case FETCHING_BOOK_FAILURE:
      return {
        loading: false,
        error: action.payload,
        bookList: [],
      };
    case FETCHING_BOOK_SUCCESS:
      return {
        loading: false,
        error: "",
        bookList: action.payload,
      };
    default:
      return state;
  }
};
