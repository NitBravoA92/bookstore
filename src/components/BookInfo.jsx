import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromApi } from '../redux/books/booksSlice';
import RemoveButton from './RemoveButton';

const BookInfo = ({ book }) => {
  const dispatch = useDispatch();

  const handleClick = (idBook) => {
    dispatch(removeBookFromApi(idBook));
  };

  return (
    <div className="book-info">
      <p className="book-category">{book.category}</p>
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">{book.author}</p>
      <ul className="book-actions">
        <li>Comments</li>
        <li>
          <RemoveButton handleRemoveClick={() => { handleClick(book.item_id); }} />
        </li>
        <li>Edit</li>
      </ul>
    </div>
  );
};

BookInfo.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookInfo;
