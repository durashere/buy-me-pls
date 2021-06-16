import PropTypes from 'prop-types';

const SquareIconButton = ({ children, onClick }) => {
  return (
    <button type="button" className="flex" onClick={onClick}>
      <span className="text-4xl material-icons-outlined">{children}</span>
    </button>
  );
};

SquareIconButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

SquareIconButton.defaultProps = {
  onClick: () => console.log('Add onClick prop'),
};

export default SquareIconButton;
