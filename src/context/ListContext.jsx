import { createContext, useContext, useEffect, useReducer } from 'react';

const initialItems = [
  { id: 0, text: 'Cherries 🍒', done: false },
  { id: 1, text: 'Peaches 🍑', done: false },
  { id: 2, text: 'Apples 🍎', done: false },
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

    case 'clear': {
      return (items = []);
    }
  }
}

export const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  useEffect(() => {
    const fetchItems = async () => {};
    fetchItems();
  }, []);
  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: items.length,
      text,
    });
  };

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

  const clearItem = () => {
    dispatch({
      type: 'clear',
    });
  };

  return (
    <ListContext.Provider
      value={{ clearItem, items, handleAddItem, handleChangeItem, handleDeleteItem }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;

export const useList = () => {
  const context = useContext(ListContext);

  if (!context)
    throw new Error('You must wrap your component with a ListProvider in order to call useList');

  return context;
};
