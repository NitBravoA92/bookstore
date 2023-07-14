import { useState } from 'react';
import Book from './Book';
import booksData from '../store/data';

const BookList = () => {
  const [books, setBooks] = useState(booksData);

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="book-list">
      {books.map((book) => (<Book key={book.id} book={book} handleRemoveBook={removeBook} />))}
    </div>
  );
};

export default BookList;
