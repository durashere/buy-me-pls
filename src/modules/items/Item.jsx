import PropTypes from 'prop-types';
import classNames from 'classnames';

import useDeleteItem from '@/modules/reactQuery/mutations/useDeleteItem';
import useUpdateItem from '@/modules/reactQuery/mutations/useUpdateItem';

const Item = ({ item }) => {
  const { mutate: deleteItem } = useDeleteItem();
  const { mutate: updateItem } = useUpdateItem();

  const handleToggleBought = async () => {
    const updatedItem = { ...item, bought: !item.bought };
    updateItem(updatedItem);
  };

  const handleSubmit = (updatedName) => {
    if (item.name === updatedName) {
      return;
    }
    if (updatedName.length === 0) {
      deleteItem(item._id);
    }

    const updatedItem = { ...item, name: updatedName };
    updateItem(updatedItem);
  };

  const handleDeleteItem = () => {
    deleteItem(item._id);
  };

  return (
    <li key={item._id} className="flex items-center group focus-within:ring-1 ring-gray-200">
      <button
        className="p-4 text-gray-500 material-icons-outlined hover:text-gray-800"
        type="button"
        onClick={handleToggleBought}
      >
        {item.bought ? 'check_box' : 'check_box_outline_blank'}
      </button>
      <input
        defaultValue={item.name}
        onBlur={(e) => handleSubmit(e.target.value)}
        className={classNames('text-xl capitalize w-full bg-transparent', {
          'text-gray-800': !item.bought,
          'text-gray-500 line-through': item.bought,
        })}
      />
      <button
        className="hidden p-4 text-gray-500 hover:text-gray-800 material-icons group-hover:block group-focus-within:block"
        type="button"
        onClick={handleDeleteItem}
      >
        close
      </button>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  ).isRequired,
};

export default Item;
