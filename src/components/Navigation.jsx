import NavigationLink from './NavigationLink';
import Logo from './Logo';

const Navigation = () => (
  <nav>
    <Logo />
    <ul id="navigation">
      <NavigationLink link="/" title="BOOKS" />
      <NavigationLink link="/categories" title="CATEGORIES" />
    </ul>
  </nav>
);

export default Navigation;
