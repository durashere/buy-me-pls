import PropTypes from 'prop-types';

import Header from '@/layouts/default/Header';

const DefaultLayout = ({ children }) => {
  return (
    <div className="fixed inset-0 flex flex-col max-w-xl mx-auto ring-2 ring-gray-200">
      <Header />
      <div className="flex-1 overflow-y-scroll scrollbar-hidden">{children}</div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
