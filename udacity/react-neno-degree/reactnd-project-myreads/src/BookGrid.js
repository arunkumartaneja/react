import React, { Component } from "react";
import Book from "./Book";

class BookGrid extends Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <li key={book.id}>
            <Book book={book} updateShelf={this.props.updateShelf} />
          </li>
        ))}
      </ol>
    );
  }
}

export default BookGrid;
