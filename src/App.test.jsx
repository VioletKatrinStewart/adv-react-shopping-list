import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders a shopping list that can add items', () => {
  render(<App />);
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
