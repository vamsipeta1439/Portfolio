import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/Software Engineer building AI-powered automation/i);
  expect(heading).toBeInTheDocument();
});
