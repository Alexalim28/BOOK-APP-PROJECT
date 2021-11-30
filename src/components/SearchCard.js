import React, { useState } from "react";
import { useHistory } from "react-router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BiMessageSquareAdd } from "react-icons/bi";

const SearchCard = ({ title, authors, description, link, image, addBook }) => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(true);

  const handleAddBook = () => {
    const book = {
      title,
      author: authors && authors.join("' "),
    };
    addBook(book);
    history.push("/");
  };

  const displayImage = image ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="mb-4" src={image} alt="cover-thumbnail" />
    </a>
  ) : (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="mb-2 w-1/3 text-center rounded-md font-serif">
        <p>No Image Available</p>
        <p className="text-green-400">Click for more info</p>
      </div>
    </a>
  );

  console.log("CARD MOUNTED");

  return (
    <div
      className={`container w-1/2 ${
        collapsed && "h-20 overflow-hidden"
      } px-3 py-4 m-auto my-3 bg-white border-2 border-green-200 shadow-md rounded-md card`}
    >
      <div className="flex flex-col space-y-3 justify-between text-gray-800">
        <div className="flex justify-between items-center text-2xl">
          <h4 className="text-xl">Title: {title}</h4>
          <button
            className="w-12 h-12 hover:bg-green-100 focus:outline-none rounded-full flex items-center justify-center"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <FaChevronDown /> : <FaChevronUp />}
          </button>
        </div>
        <h3 className="text-lg">Author(s): {authors && authors.join(", ")}</h3>
        {displayImage}
        <p className="font-semibold">Description:</p>
        <p>{description || "No Description Available"}</p>
        <button
          className="flex self-center space-x-3 border-3 bg-green-500 rounded-md p-2 text-white font-semibold cursor-pointer focus:outline-none"
          onClick={handleAddBook}
        >
          <span>Add To Book List ?</span>
          <BiMessageSquareAdd className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
