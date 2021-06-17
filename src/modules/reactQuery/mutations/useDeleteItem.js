import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const deleteItem = async (itemId) => {
  const { data } = await axios.delete(`/api/items/${itemId}`);
  return data;
};

const useDeleteItem = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteItem, {
    onMutate: async (deletedItem) => {
      await queryClient.cancelQueries('items');
      const previousItems = queryClient.getQueryData('items');
      const updatedItems = previousItems.filter((item) => item._id !== deletedItem);
      queryClient.setQueryData('items', updatedItems);
      return { previousItems };
    },
    onError: (err, deletedItem, context) => {
      queryClient.setQueryData('items', context.previousItems);
    },
    onSettled: () => {
      queryClient.invalidateQueries('items');
    },
  });
};

export default useDeleteItem;
