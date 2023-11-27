import "./Navigation.css";
import PropTypes from "prop-types";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function AppNavigation() {
  return (
    <>
      <nav className="navigation-container">
        <Link to="/" className="site-title">
          Home
        </Link>
        <ul>
          <NavigationLink to="/exercises">Exercises</NavigationLink>
          <NavigationLink to="/about">About</NavigationLink>
        </ul>
      </nav>
    </>
  );
}

function NavigationLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

NavigationLink.propTypes = {
  to: PropTypes.any,
  children: PropTypes.any,
};
