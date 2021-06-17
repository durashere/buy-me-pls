import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const updateItem = async (values) => {
  const { data: updatedItem } = await axios.patch(`/api/items/${values._id}`, values);
  return updatedItem;
};

const useUpdateItem = () => {
  const queryClient = useQueryClient();

  return useMutation(updateItem, {
    onMutate: async (updatedItem) => {
      await queryClient.cancelQueries('items');
      const previousItems = queryClient.getQueryData('items');
      const updatedItems = previousItems.map((item) =>
        item._id === updatedItem._id ? updatedItem : item
      );
      queryClient.setQueryData('items', updatedItems);
      return { previousItems };
    },
    onError: (err, updatedItem, context) => {
      queryClient.setQueryData('items', context.previousItems);
    },
    onSettled: () => {
      queryClient.invalidateQueries('items');
    },
  });
};

export default useUpdateItem;
