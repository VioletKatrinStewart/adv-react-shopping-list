import React from 'react';
import { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewItem('');
    onAddItem(newItem);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="add item" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button type="submit">Add Item</button>
    </form>
  );
}
