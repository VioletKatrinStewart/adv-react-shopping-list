import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import ListProvider from './context/ListContext';

test('renders a shopping list that can add items', () => {
  render(
    <ListProvider>
      <App />
    </ListProvider>
  );
  const addInput = screen.getByPlaceholderText('add item');
  const addButton = screen.getByText('Add Item');

  screen.getByText('Cherries 🍒');
  screen.getByText('Peaches 🍑');
  screen.getByText('Apples 🍎');

  expect(screen.queryByText('Meat 🍖')).not.toBeInTheDocument();

  userEvent.type(addInput, 'Meat 🍖');
  userEvent.click(addButton);

  screen.getByText('Meat 🍖');
});

test('renders a shopping list that can edit items', () => {
  render(
    <ListProvider>
      <App />
    </ListProvider>
  );

  const editButton = screen.getByLabelText('Edit Peaches 🍑');
  userEvent.click(editButton);
  const saveEditButton = screen.getByLabelText('Save');
  userEvent.click(saveEditButton);
});

test('renders a shopping list that can delete items', () => {
  render(
    <ListProvider>
      <App />
    </ListProvider>
  );

  const deleteButton = screen.getByLabelText('Delete Peaches 🍑');
  userEvent.click(deleteButton);
  expect(screen.queryByText('Peaches 🍑')).not.toBeInTheDocument();
});
