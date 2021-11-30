import { ADD_BOOK, DELETE_BOOK, CLEAR_BOOKS } from "./actionTypes";

const initState = {
  listOfBooks: JSON.parse(localStorage.getItem("books")) || [],
};

export const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      state = { listOfBooks: [...state.listOfBooks, action.payload] };
      localStorage.setItem("books", JSON.stringify(state.listOfBooks));
      return state;
    case DELETE_BOOK:
      state = {
        listOfBooks: state.listOfBooks.filter(
          (book) => book.title !== action.payload
        ),
      };
      localStorage.setItem("books", JSON.stringify(state.listOfBooks));
      return state;
    case CLEAR_BOOKS:
      localStorage.removeItem("books");
      return {
        listOfBooks: [],
      };
    default:
      return state;
  }
};
