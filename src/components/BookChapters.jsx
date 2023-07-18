import BookCircularBar from './BookCircularBar';

const BookChapters = () => (
  <div className="book-chapters-info">
    <BookCircularBar completed="64%" />
    <div className="book-chapters">
      <p className="book-current-chapter">CURRENT CHAPTER</p>
      <p className="book-chapters-count">
        Chapter
        {' '}
        17
      </p>
      <button type="button" className="book-update-progress">
        UPDATE PROGRESS
      </button>
    </div>
  </div>
);

export default BookChapters;
