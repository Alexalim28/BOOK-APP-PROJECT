import React from "react";
import SearchBar from "../components/SearchBar";
import SearchCard from "../components/SearchCard";
import { connect } from "react-redux";
import { fetchBooks } from "../redux/fetchBooks/fetchActions";
import { addBook } from "../redux/books/bookAction";

const Search = ({ bookList, fetchData, addBook }) => {
  return (
    <div className=" container flex-grow">
      <SearchBar fetchData={fetchData} />
      {bookList.map((book) => {
        const id = book.id;
        const { title, authors, description, infoLink: link } = book.volumeInfo;
        const image = book?.volumeInfo?.imageLinks?.smallThumbnail;
        return (
          <SearchCard
            key={id}
            title={title}
            authors={authors}
            description={description}
            link={link}
            image={image}
            addBook={addBook}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.searchList.bookList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (term) => dispatch(fetchBooks(term)),
    addBook: (book) => dispatch(addBook(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
