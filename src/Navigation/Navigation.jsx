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
          <CustomLink to="/exercises">Exercises</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </ul>
      </nav>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
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

CustomLink.propTypes = {
  to: PropTypes.any,
  children: PropTypes.any,
};
