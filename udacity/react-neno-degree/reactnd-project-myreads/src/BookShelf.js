import React, { Component } from "react";
import BookGrid from "./BookGrid";

class BooksShelf extends Component {
  render() {
    const shelfBooks = this.props.books.filter(
      (book) => book.shelf === this.props.shelfType
    );
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.boolShelfTitle}</h2>
        <div className="bookshelf-books">
          <BookGrid books={shelfBooks} updateShelf={this.props.updateShelf} />
        </div>
      </div>
    );
  }
}

export default BooksShelf;
