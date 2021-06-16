import PropTypes from 'prop-types';

import Header from '@/layouts/default/Header';
import InsertItemInput from '@/common/components/InsertItemInput';

const DefaultLayout = ({ children }) => {
  return (
    <div className="fixed inset-0 grid w-full max-w-xl mx-auto sm:shadow-md grid-rows-pancake">
      <Header />
      <div className="overflow-y-scroll scrollbar-hidden">{children}</div>
      <InsertItemInput />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
