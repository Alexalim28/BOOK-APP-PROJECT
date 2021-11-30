import axios from "axios";
import {
  FETCHING_BOOK,
  FETCHING_BOOK_SUCCESS,
  FETCHING_BOOK_FAILURE,
} from "./actionTypes";

const fetchingBook = () => {
  return {
    type: FETCHING_BOOK,
  };
};

const fetchingBookSuccess = (books) => {
  return {
    type: FETCHING_BOOK_SUCCESS,
    payload: books,
  };
};

const fetchingBookFailure = (error) => {
  return {
    type: FETCHING_BOOK_FAILURE,
    payload: error,
  };
};

export const fetchBooks = (term) => {
  return (dispatch) => {
    dispatch(fetchingBook());

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${term}&key=${process.env.KEY}`
      )
      .then((response) => {
        dispatch(fetchingBookSuccess(response.data.items));
      })
      .catch((error) => {
        dispatch(fetchingBookFailure(error.message));
      });
  };
};
