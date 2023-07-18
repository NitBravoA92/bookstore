import PropTypes from 'prop-types';

const InputForm = ({
  type, id, placeholder, isRequired,
}) => (
  <input type={type} className="book-input" id={id} placeholder={placeholder} required={isRequired} />
);

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
};

export default InputForm;
