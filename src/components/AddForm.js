import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const initialState = { title: "", author: "" };

const AddForm = ({ addBook, clearBooks, bookLength }) => {
  const [book, setBook] = useState(initialState);

  const handleChange = (e) => {
    const inputName = e.target.id;
    setBook({ ...book, [inputName]: e.target.value });
  };

  const handleClick = () => {
    addBook(book);
    setBook(initialState);
  };

  return (
    <div className="container w-1/2 px-2 py-2 m-auto mt-2 bg-white border-2 border-green-200 shadow-md rounded-md space-y-4">
      <div className="px-2 flex space-x-2">
        <input
          type="text"
          id="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title"
          className="input"
          autoComplete="off"
        />
        <input
          type="text"
          id="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author"
          className="input"
          autoComplete="off"
        />
      </div>
      <div className="px-2">
        <button className="btn" onClick={handleClick}>
          Add a new book
        </button>
      </div>
      {bookLength >= 1 && (
        <div className="px-2">
          <button
            className="btn bg-red-500 transform-none hover:bg-red-400 space-x-3"
            onClick={clearBooks}
          >
            <span className="inline-block transform translate-y-1">
              Clear all books
            </span>
            <AiTwotoneDelete className="inline-block text-3xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AddForm;
