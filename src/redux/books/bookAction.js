import { ADD_BOOK, DELETE_BOOK, CLEAR_BOOKS } from "./actionTypes";

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};

export const deleteBook = (title) => {
  return {
    type: DELETE_BOOK,
    payload: title,
  };
};

export const clearBooks = () => {
  return {
    type: CLEAR_BOOKS,
  };
};
