import { useState } from 'react';
import useCreateItem from '../reactQuery/mutations/useCreateItem';

const NewItem = () => {
  const [currentName, setCurrentName] = useState('');
  const { mutate: createItem } = useCreateItem();

  const handleSubmit = (e) => {
    if (currentName.length === 0) {
      return;
    }

    e.preventDefault();

    const newItem = { name: currentName };
    createItem(newItem);
    setCurrentName('');
  };

  return (
    <form
      className="flex items-center group focus-within:ring-1 ring-gray-200"
      onSubmit={handleSubmit}
    >
      <span className="p-4 text-gray-500 select-none material-icons-outlined">add</span>
      <input
        value={currentName}
        onBlur={handleSubmit}
        onChange={(e) => setCurrentName(e.target.value)}
        className="w-full text-xl bg-transparent"
        placeholder="New item to add..."
      />
    </form>
  );
};

export default NewItem;
