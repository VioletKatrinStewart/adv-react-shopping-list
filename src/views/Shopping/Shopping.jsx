import React from 'react';
import { useReducer } from 'react';
import ItemList from '../../components/ItemList/ItemList';

const initialItems = [
  { id: 0, text: 'Cherries 🍒', done: false },
  { id: 1, text: 'Peaches 🍑', done: false },
  { id: 2, text: 'Apples 🍎 ', done: false },
];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'deleted': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function Shopping() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  //   const handleAddItem = (text) => {
  //     dispatch({
  //       type: 'added',
  //       id: items.length + 1,
  //       text,
  //     });
  //   };

  const handleChangeItem = (task) => {
    dispatch({
      type: 'changed',
      task,
    });
  };

  const handleDeleteItem = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };
  return (
    <>
      <h1>Shopping List</h1>
      <ItemList items={items} onChangeItem={handleChangeItem} onDeleteItem={handleDeleteItem} />
    </>
  );
}
