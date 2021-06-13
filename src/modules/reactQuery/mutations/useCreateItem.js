import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const createItem = async (newItemData) => {
  const { data } = await axios.post(`/api/items`, newItemData);
  return data;
};

const useCreateItem = () => {
  const queryClient = useQueryClient();

  return useMutation(createItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('items');
    },
  });
};

export default useCreateItem;
