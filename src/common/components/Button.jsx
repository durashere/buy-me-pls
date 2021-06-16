import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => {
  return (
    <button type="button" className="flex" onClick={onClick}>
      <span className="text-4xl material-icons-outlined">{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => console.log('Add onClick prop'),
};

export default Button;
