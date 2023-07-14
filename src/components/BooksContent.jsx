import Book from './Book';
import booksData from '../store/data';
import BookForm from './BookForm';
import '../styles/Books.css';

const BooksContent = () => (
  <>
    <div className="book-list">
      {booksData.map((book) => (<Book key={book.id} book={book} />))}
    </div>
    <BookForm />
  </>
);

export default BooksContent;
