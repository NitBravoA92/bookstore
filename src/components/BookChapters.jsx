import PropTypes from 'prop-types';

const BookChapters = ({ chapterInfo }) => (
  <div className="book-chapters-info">
    <div className="book-progress">{chapterInfo.completed}</div>
    <div className="book-chapters">{chapterInfo.chapter}</div>
  </div>
);

BookChapters.propTypes = {
  chapterInfo: PropTypes.shape({
    completed: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookChapters;
