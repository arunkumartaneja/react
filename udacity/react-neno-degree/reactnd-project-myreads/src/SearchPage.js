import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookGrid from "./BookGrid";

class SearchPage extends Component {
  state = {
    query: "",
    searchBooks: [],
    errorMsg: "",
  };

  updateBooks = (searchBooks, errorMsg) => {
    // update shelf
    BooksAPI.getAll().then((books) => {
      let bookShelf = new Map();
      for (let book of books) {
        bookShelf[book.id] = book.shelf;
      }
      for (let searchBook of searchBooks) {
        searchBook.shelf = bookShelf[searchBook.id];
      }

      this.setState(() => ({
        searchBooks,
        errorMsg
      }));
    });
  };

  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }));

    let errorMsg = '';
    if (query) {
      BooksAPI.search(query).then((searchBooks) => {
        if (searchBooks.error && searchBooks.error !== "") {
          searchBooks = [];
          errorMsg = "Books not found";
        }
        this.updateBooks(searchBooks, errorMsg);
      });
    } else {
      this.updateBooks([], errorMsg);
    }
  };

  render() {
    const { query, searchBooks, errorMsg } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {errorMsg ? (
            <p className="error-msg">{errorMsg}</p>
          ) : (
            <BookGrid
              books={searchBooks}
              updateShelf={this.props.updateShelf}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SearchPage;
