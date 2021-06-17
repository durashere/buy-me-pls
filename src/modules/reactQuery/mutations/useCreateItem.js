import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const createItem = async (newItemData) => {
  const { data } = await axios.post(`/api/items`, newItemData);
  return data;
};

const useCreateItem = () => {
  const queryClient = useQueryClient();

  return useMutation(createItem, {
    onMutate: async (newItem) => {
      await queryClient.cancelQueries('items');
      const previousItems = queryClient.getQueryData('items');
      const newItemFixed = { ...newItem, _id: 'temp_id' };
      queryClient.setQueryData('items', (old) => [...old, newItemFixed]);
      return { previousItems };
    },
    onError: (err, newItem, context) => {
      queryClient.setQueryData('items', context.previousItems);
    },
    onSettled: () => {
      queryClient.invalidateQueries('items');
    },
  });
};

export default useCreateItem;
