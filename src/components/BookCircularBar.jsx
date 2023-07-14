import PropTypes from 'prop-types';

const BookCicularBar = ({ completed }) => (
  <div className="book-progress">
    <div className="circular-container">
      <div className="circular" />
    </div>
    <div className="progress-info">
      <p className="progress-info-percentage">{completed}</p>
      <p className="progress-completed-text">Completed</p>
    </div>
  </div>
);

BookCicularBar.propTypes = {
  completed: PropTypes.string.isRequired,
};

export default BookCicularBar;
