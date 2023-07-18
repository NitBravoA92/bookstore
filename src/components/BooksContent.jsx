import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import '../styles/Books.css';

const BooksContent = () => {
  const booksList = useSelector((state) => state.books);
  return (
    <>
      <div className="book-list">
        {booksList.map((book) => (<Book key={book.item_id} book={book} />))}
      </div>
      <BookForm />
    </>
  );
};

export default BooksContent;
