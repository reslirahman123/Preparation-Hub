import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

test('renders initial count', () => {
  // Render the component
  render(<Counter />);

  // Assert that the initial count is 0
  const countElement = screen.getByTestId('count-value');
  expect(countElement).toHaveTextContent('Count: 0');
});

test('increments count on button click', () => {
  // Render the component
  render(<Counter />);

  // Find the button and the count element
  const countElement = screen.getByTestId('count-value');
  const buttonElement = screen.getByText(/increment/i);

  // Simulate a button click
  fireEvent.click(buttonElement);

  // Assert that the count has been incremented
  expect(countElement).toHaveTextContent('Count: 1');
});
