import Navigation from './Navigation';
import UserIcon from './UserIcon';
import '../styles/Header.css';

const Header = () => (
  <header>
    <div className="container">
      <div className="navigation">
        <Navigation />
        <UserIcon />
      </div>
    </div>
  </header>
);

export default Header;
