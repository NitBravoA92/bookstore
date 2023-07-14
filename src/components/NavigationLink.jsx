import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ link, title }) => {
  const linkStatus = ({ isActive, isPending }) => {
    if (isActive) return 'active';
    if (isPending) return 'pending';
    return null;
  };

  return (
    <li className="nav-item">
      <NavLink
        to={link}
        className={linkStatus}
      >
        {title}
      </NavLink>
    </li>
  );
};

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavigationLink;
