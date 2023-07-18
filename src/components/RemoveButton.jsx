import PropTypes from 'prop-types';

const RemoveButton = ({ handleRemoveClick }) => (
  <button
    type="button"
    className="remove-book"
    onClick={handleRemoveClick}
  >
    Remove
  </button>
);

RemoveButton.propTypes = {
  handleRemoveClick: PropTypes.func.isRequired,
};

export default RemoveButton;
