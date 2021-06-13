import useDeleteItem from '@/modules/reactQuery/mutations/useDeleteItem';
import useUpdateItem from '@/modules/reactQuery/mutations/useUpdateItem';
import useItems from '@/modules/reactQuery/queries/useItems';
import classNames from 'classnames';

const List = ({ editMode }) => {
  const { data: items, isLoading: isLoadingItems } = useItems();
  const { mutate: deleteItem } = useDeleteItem();
  const { mutate: updateItem } = useUpdateItem();

  const handleToggleBought = async (values) => {
    const updatedItem = { ...values, bought: !values.bought };
    updateItem(updatedItem);
  };

  if (isLoadingItems) {
    return null;
  }

  const handleDeleteItem = (itemId) => {
    deleteItem(itemId);
  };

  return (
    <>
      <ul className="divide-y">
        {items
          .sort((a, b) => a.bought - b.bought)
          .map((item) => (
            <li className="flex" key={item._id}>
              <button
                className="inset-0 flex items-center w-full focus:outline-none"
                type="button"
                onClick={() => handleToggleBought(item)}
              >
                <span
                  className={classNames('p-4 material-icons-outlined', {
                    'text-gray-600': !item.bought,
                    'text-gray-300': item.bought,
                  })}
                >
                  {item.bought ? 'check_box' : 'check_box_outline_blank'}
                </span>
                <span
                  className={classNames('text-xl capitalize', {
                    'text-gray-600': !item.bought,
                    'text-gray-300 line-through': item.bought,
                  })}
                >
                  {item.name}
                </span>
              </button>
              {editMode && (
                <button
                  className="p-4 text-red-400 focus:outline-none material-icons"
                  type="button"
                  onClick={() => handleDeleteItem(item._id)}
                >
                  delete
                </button>
              )}
            </li>
          ))}
      </ul>
    </>
  );
};

export default List;
