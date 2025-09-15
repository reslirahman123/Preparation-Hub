import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  // Just test that the app renders without crashing
  expect(document.body).toBeInTheDocument();
});
