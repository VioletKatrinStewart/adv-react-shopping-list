import React from 'react';
import { useList } from '../../context/ListContext';
import ItemList from '../../components/ItemList/ItemList';
import AddItem from '../../components/AddItem/AddItem';

export default function Shopping() {
  const { items, handleAddItem, handleChangeItem, handleDeleteItem } = useList();

  return (
    <>
      <h1>Shopping List!</h1>
      <AddItem onAddItem={handleAddItem} />
      <ItemList items={items} onChangeItem={handleChangeItem} onDeleteItem={handleDeleteItem} />
    </>
  );
}
