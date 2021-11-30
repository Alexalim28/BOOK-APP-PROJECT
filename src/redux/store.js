import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { bookReducer } from "./books/bookReducer";
import { fetchReducer } from "./fetchBooks/fetchReducer";

const rootReducer = combineReducers({
  books: bookReducer,
  searchList: fetchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
