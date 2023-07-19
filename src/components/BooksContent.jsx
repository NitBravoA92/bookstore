import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FcHighPriority, FcAdvance } from 'react-icons/fc';
import { TbBookOff } from 'react-icons/tb';
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
        <div className="alert-icon"><FcHighPriority /></div>
        <p className="alert-message">{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading">
        <div className="alert-icon"><FcAdvance /></div>
        <p className="alert-message">Loading...</p>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="no-books">
        <div className="alert-icon"><TbBookOff /></div>
        <p className="alert-message">There are no books to display.</p>
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
