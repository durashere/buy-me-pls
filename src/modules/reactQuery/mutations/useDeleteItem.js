import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

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
