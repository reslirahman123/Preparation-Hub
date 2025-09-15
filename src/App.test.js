import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders StatementDownloadForm component', () => {
  render(<App />);
  const titleElement = screen.getByText(/transaction details/i);
  expect(titleElement).toBeInTheDocument();
});
