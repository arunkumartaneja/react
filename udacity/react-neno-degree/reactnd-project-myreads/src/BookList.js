import React, { Component } from "react";
import { Link } from "react-router-dom";
import BooksShelf from "./BookShelf";

class BookList extends Component {
  render() {
    const shelves = {
      currentlyReading: { title: "Currently Reading" },
      wantToRead: { title: "Want to Read" },
      read: { title: "Read" },
    };

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {Object.keys(shelves).map((type) => (
              <BooksShelf
                key={type}
                boolShelfTitle={shelves[type].title}
                books={this.props.books}
                shelfType={type}
                updateShelf={this.props.updateShelf}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookList;
