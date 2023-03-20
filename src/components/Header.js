import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, showTaskForm, onShowTaskForm }) => {
  const location = useLocation();
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showTaskForm ? "red" : "green"}
          text={showTaskForm ? "Close" : "Add"}
          onClick={onShowTaskForm}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
