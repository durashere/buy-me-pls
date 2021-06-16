import axios from 'axios';
import { useQuery } from 'react-query';

const getItems = async () => {
  const { data } = await axios.get(`/api/items`);
  return data;
};

const useItems = () => {
  return useQuery('items', getItems);
};

export default useItems;
