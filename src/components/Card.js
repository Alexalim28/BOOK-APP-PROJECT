import React from "react";
import { RiChatDeleteFill } from "react-icons/ri";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    scale: 0,
  },
  visible: (i) => ({
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.03,
    },
  }),
};

const Card = ({ book, deleteBook, i }) => {
  return (
    <motion.div
      className="container w-1/3 px-2 py-2 m-auto mt-2 bg-white border-2 border-green-200 shadow-md rounded-md card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={i}
      layout
    >
      <h6 className="text-xl font-bold tracking-wide text-gray-600">Title:</h6>
      <p className="text-md text-gray-700">{book.title}</p>
      <div className="flex justify-between">
        <div>
          <h4 className="text-md mt-1 text-gray-600 italic tracking-wide ">
            Author:
          </h4>
          <p className="text-md text-gray-700">{book.author}</p>
        </div>
        <button className="self-end " onClick={() => deleteBook(book.title)}>
          <RiChatDeleteFill className="text-4xl text-red-500 transition transform hover:scale-110" />
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
