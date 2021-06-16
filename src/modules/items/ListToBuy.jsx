import PropTypes from 'prop-types';

import Item from '@/modules/items/Item';

const ListToBuy = ({ items }) => {
  return (
    <ul>
      {items
        .filter((item) => !item.bought)
        .map((item) => (
          <Item key={item._id} item={item} />
        ))}
    </ul>
  );
};

ListToBuy.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListToBuy;
