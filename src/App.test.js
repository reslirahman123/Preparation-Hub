import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  const { container } = render(<App />);
  // Just test that the app renders without crashing
  expect(container).toBeTruthy();
});
