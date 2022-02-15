import React from 'react';
import { useState, useReducer } from 'react';

const initialItems = [
  { id: 0, text: 'Cherries 🍒', done: false },
  { id: 1, text: 'Peaches 🍑', done: false },
  { id: 2, text: 'Apples 🍎 ', done: false },
];

function itemsReducter(items, action) {
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
  return <div>Shopping</div>;
}
