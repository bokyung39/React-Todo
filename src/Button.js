import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ onClick, text }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
