import PropTypes from 'prop-types';

const BookInfo = ({ book }) => {
  const { title, author } = book;

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
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookInfo;
