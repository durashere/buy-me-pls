import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const deleteItem = async (itemId) => {
  const { data } = await axios.delete(`/api/items/${itemId}`);
  return data;
};

const useDeleteItem = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('items');
    },
  });
};

export default useDeleteItem;
