import PropTypes from 'prop-types';
import BookCircularBar from './BookCircularBar';

const BookChapters = ({ chapterInfo }) => (
  <div className="book-chapters-info">
    <BookCircularBar completed={chapterInfo.completed} />
    <div className="book-chapters">
      <p className="book-current-chapter">CURRENT CHAPTER</p>
      <p className="book-chapters-count">
        Chapter
        {' '}
        {chapterInfo.chapter}
      </p>
      <button type="button" className="book-update-progress">
        UPDATE PROGRESS
      </button>
    </div>
  </div>
);

BookChapters.propTypes = {
  chapterInfo: PropTypes.shape({
    completed: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookChapters;
