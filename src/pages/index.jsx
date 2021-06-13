import InsertItemInput from '@/common/components/InsertItemInput';
import List from '@/common/components/List';
import DefaultLayout from '@/layouts/default';
import Header from '@/layouts/default/Header';
import { useState } from 'react';

const DefaultPage = () => {
  const [editMode, setEditMode] = useState(false);

  return (
    <DefaultLayout>
      <DefaultLayout.Header>
        <Header setEditMode={setEditMode} />
      </DefaultLayout.Header>
      <DefaultLayout.Content>
        <List editMode={editMode} />
      </DefaultLayout.Content>
      <DefaultLayout.Footer>
        <InsertItemInput />
      </DefaultLayout.Footer>
    </DefaultLayout>
  );
};

export default DefaultPage;
