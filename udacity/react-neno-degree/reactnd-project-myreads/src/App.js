import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookList from "./BookList";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books
      }));
    });
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      BooksAPI.getAll().then((books) => {
        this.setState(() => ({
          books
        }));
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookList books={this.state.books} updateShelf={this.updateShelf} />} />
        <Route
          exact
          path="/search"
          render={() => <SearchPage updateShelf={this.updateShelf}/>}
        />
      </div>
    );
  }
}

export default BooksApp;
