import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import BookForm from './BookForm';
import { fetchBooks } from '../redux/books/booksSlice';
import '../styles/Books.css';

const BooksContent = () => {
  const { books, isLoading, error } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="no-books">
        <p>There are no books to display.</p>
      </div>
    );
  }

  return (
    <>
      <div className="book-list">
        {books.map((book) => (<Book key={book.item_id} book={book} />))}
      </div>
      <BookForm />
    </>
  );
};

export default BooksContent;
