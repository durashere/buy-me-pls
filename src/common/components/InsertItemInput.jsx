import useCreateItem from '@/modules/reactQuery/mutations/useCreateItem';
import { useState } from 'react';

const InsertItemInput = () => {
  const { mutate } = useCreateItem();

  const [name, setName] = useState('');

  const handleItemCreate = (e) => {
    e.preventDefault();
    mutate({ name });
    setName('');
  };

  return (
    <form className="bg-white border-t-2" onSubmit={(e) => handleItemCreate(e)}>
      <input
        className="w-full p-4 text-xl bg-transparent focus:outline-none"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new item to buy..."
      />
    </form>
  );
};

export default InsertItemInput;
