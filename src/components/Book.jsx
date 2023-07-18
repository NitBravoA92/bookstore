import PropTypes from 'prop-types';
import BookInfo from './BookInfo';
import BookChapters from './BookChapters';

const Book = ({ book }) => (
  <div className="book-item">
    <BookInfo
      book={book}
    />
    <BookChapters />
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
