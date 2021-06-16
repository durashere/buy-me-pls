import Item from '@/modules/items/Item';
import useItems from '@/modules/reactQuery/queries/useItems';

const List = () => {
  const { data: items, isLoading: isLoadingItems } = useItems();

  if (isLoadingItems) {
    return null;
  }

  return (
    <ul>
      {items
        .sort((a, b) => a.bought - b.bought)
        .map((item) => (
          <Item key={item._id} item={item} />
        ))}
    </ul>
  );
};

export default List;
