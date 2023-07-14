import PropTypes from 'prop-types';
import BookInfo from './BookInfo';
import BookChapters from './BookChapters';

const Book = ({ book }) => {
  const {
    id, title, author, completed, chapter,
  } = book;
  return (
    <div className="book-item">
      <BookInfo book={{ id, title, author }} />
      <BookChapters chapterInfo={{ completed, chapter }} />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
