import React from 'react';
import { useList } from '../../context/ListContext';

export default function Header() {
  const { items, clearItem } = useList();

  return (
    <div>
      <h2>Your Groceries</h2>
      <button type="button" aria-label="Delete All" onClick={clearItem}>
        Clear All
      </button>
      <span>{items.length}</span>
    </div>
  );
}
