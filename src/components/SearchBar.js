import React, { useEffect, useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const homeVariants = {
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const SearchBar = ({ fetchData }) => {
  const [term, setTerm] = useState("");

  const displayBooks = () => {
    fetchData(term);
    setTerm("");
  };

  const keydowwHandler = useCallback(
    (e) => {
      if (e.key === "Enter") {
        fetchData(term);
        setTerm("");
      }
    },
    [fetchData, term]
  );

  useEffect(() => {
    window.addEventListener("keydown", keydowwHandler);
    return () => window.removeEventListener("keydown", keydowwHandler);
  }, [keydowwHandler]);

  return (
    <motion.div
      className="flex justify-center space-x-2 w-1/3 m-auto mt-3"
      variants={homeVariants}
      exit="exit"
    >
      <input
        type="text"
        id="title"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search..."
        className="input my-0"
        autoComplete="off"
      />
      <button
        className="btn search my-0 rounded-full h-12 w-12 flex items-center justify-center"
        onClick={displayBooks}
      >
        <FaSearch />
      </button>
    </motion.div>
  );
};

export default SearchBar;
