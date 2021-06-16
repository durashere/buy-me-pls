import PropTypes from 'prop-types';
import { useState } from 'react';

import Item from '@/modules/items/Item';

const ListBought = ({ items }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded((previousExpanded) => !previousExpanded);
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <>
      <button onClick={handleExpand} type="button" className="flex items-center w-full group">
        <span className="p-4 text-gray-500 material-icons group-hover:text-gray-800">
          {expanded ? 'expand_more' : 'chevron_right'}
        </span>
        <span className="text-xl text-gray-500 group-hover:text-gray-800">
          {items.length} items bought
        </span>
      </button>
      {expanded && (
        <ul>
          {items.map((item) => (
            <Item key={item._id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
};

ListBought.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListBought;
