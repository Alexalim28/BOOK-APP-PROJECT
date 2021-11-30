import AddForm from "../components/AddForm";
import Card from "../components/Card";
import { connect } from "react-redux";
import { addBook, deleteBook, clearBooks } from "../redux/books/bookAction";
import { motion, AnimatePresence } from "framer-motion";

const homeVariants = {
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Home = ({ books, addBook, deleteBook, clearBooks }) => {
 
  return (
    <motion.main className="flex-grow" variants={homeVariants} exit="exit">
      <AddForm
        addBook={addBook}
        clearBooks={clearBooks}
        bookLength={bookList.length}
      />
      <AnimatePresence>
        {books.map((book, i) => {
          return (
            <Card key={book.title} book={book} deleteBook={deleteBook} i={i} />
          );
        })}
      </AnimatePresence>
    </motion.main>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books.listOfBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => dispatch(addBook(book)),
    deleteBook: (title) => dispatch(deleteBook(title)),
    clearBooks: () => dispatch(clearBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
