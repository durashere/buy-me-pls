import { useQuery } from 'react-query';
import axios from 'axios';

const getItems = async () => {
  const { data } = await axios.get(`/api/items`);
  return data;
};

const useItems = () => {
  return useQuery('items', getItems);
};

export default useItems;
