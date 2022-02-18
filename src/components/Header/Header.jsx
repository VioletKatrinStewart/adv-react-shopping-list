import React from 'react';
import { useList } from '../../context/ListContext';

export default function Header() {
  const { items } = useList();
  return (
    <div>
      <h2>Your Groceries</h2>
      <span>{items.length}</span>
    </div>
  );
}
