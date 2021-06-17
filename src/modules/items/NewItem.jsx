import { useState } from 'react';

import useCreateItem from '@/modules/reactQuery/mutations/useCreateItem';

const NewItem = () => {
  const [currentName, setCurrentName] = useState('');
  const { mutate: createItem } = useCreateItem();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentName.length === 0) {
      return;
    }

    const newItem = { name: currentName };
    createItem(newItem);
    setCurrentName('');

    const scrollToBottom = document.getElementById('expand-button');
    scrollToBottom.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return (
    <form
      className="sticky bottom-0 flex bg-white group h-14 ring-2 ring-gray-200"
      onSubmit={handleSubmit}
    >
      <span className="p-4 text-gray-500 select-none material-icons-outlined">add</span>
      <input
        value={currentName}
        onBlur={handleSubmit}
        onChange={(e) => setCurrentName(e.target.value)}
        className="w-full h-full text-xl capitalize bg-transparent"
        placeholder="item"
      />
    </form>
  );
};

export default NewItem;
