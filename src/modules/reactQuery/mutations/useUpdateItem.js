import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const updateItem = async (values) => {
  const { data: updatedItem } = await axios.patch(`/api/items/${values._id}`, values);
  return updatedItem;
};

const useUpdateItem = () => {
  const queryClient = useQueryClient();

  return useMutation(updateItem, {
    onSuccess: () => {
      queryClient.invalidateQueries('items');
    },
  });
};

export default useUpdateItem;
