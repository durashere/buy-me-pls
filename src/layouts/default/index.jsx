import PropTypes from 'prop-types';

const Header = ({ children }) => {
  return <div className="">{children}</div>;
};

const Content = ({ children }) => {
  return <div className="overflow-y-scroll">{children}</div>;
};

const Footer = ({ children }) => {
  return <div className="">{children}</div>;
};

const DefaultLayout = ({ children }) => {
  return <div className="fixed inset-0 grid grid-rows-pancake">{children}</div>;
};

DefaultLayout.Header = Header;
DefaultLayout.Content = Content;
DefaultLayout.Footer = Footer;

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
