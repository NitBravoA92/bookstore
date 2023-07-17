import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/bookSlice';


const BookInfo = ({ book }) => {
  const { id, title, author } = book;

  const dispatch = useDispatch();

  const handleRemoveClick = (idBook) => {
    dispatch(removeBook(idBook));
  };

  return (
    <div className="book-info">
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <ul className="book-actions">
        <li>Comments</li>
        <li>
          <button
            type="button"
            className="remove-book"
            onClick={() => { handleRemoveClick(id) }}
          >
            Remove
          </button>
        </li>
        <li>Edit</li>
      </ul>
    </div>
  );
};

BookInfo.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookInfo;
