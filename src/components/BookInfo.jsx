import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import RemoveButton from './RemoveButton';

const BookInfo = ({ book }) => {
  const { id, title, author } = book;

  const dispatch = useDispatch();

  const handleClick = (idBook) => {
    dispatch(removeBook(idBook));
  };

  return (
    <div className="book-info">
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <ul className="book-actions">
        <li>Comments</li>
        <li>
          <RemoveButton handleRemoveClick={() => { handleClick(id); }} />
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
