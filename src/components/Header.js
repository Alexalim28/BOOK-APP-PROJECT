import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-green-400 h-20 px-10 shadow-lg border-b-2 border-gray-300 grid grid-cols-3 items-center text-white font-mono flex-shrink-0">
      <h1 className="col-span-2 pl-32 text-6xl">Books</h1>
      <div className="space-x-14 text-xl ml-32">
        <Link to="/">
          <span className="transition duration-200 hover:text-green-300">
            Home
          </span>
        </Link>
        <Link to="/search">
          <span className="transition duration-200 hover:text-green-300 tracking-tighter">
            Search a book
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
