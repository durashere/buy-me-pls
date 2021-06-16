import ListBought from '@/modules/items/ListBought';
import ListToBuy from '@/modules/items/ListToBuy';
import NewItem from '@/modules/items/NewItem';
import useItems from '@/modules/reactQuery/queries/useItems';

const DefaultPage = () => {
  const { data: items, isLoading: isLoadingItems } = useItems();

  if (isLoadingItems) {
    return null;
  }

  const itemsToBuy = items.filter((item) => !item.bought);
  const itemsBought = items.filter((item) => item.bought);

  return (
    <>
      <ListToBuy items={itemsToBuy} />
      <NewItem />
      <ListBought items={itemsBought} />
    </>
  );
};

export default DefaultPage;
