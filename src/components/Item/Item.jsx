import React from 'react';
import { useState } from 'react';

export default function Item({ item, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let itemContent;
  if (isEditing) {
    itemContent = (
      <>
        <input
          value={item.text}
          onChange={(e) => {
            onChange({
              ...item,
              text: e.target.value,
            });
          }}
        />

        <button type="button" onClick={() => setIsEditing(false)}>
          save
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          onChange({
            ...item,
            done: e.target.checked,
          });
        }}
      />
      {itemContent}
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}
