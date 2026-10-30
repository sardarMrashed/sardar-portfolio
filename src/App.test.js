import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('shows the full-stack headline and contact action', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /building thoughtful digital products/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /get in touch/i })).toHaveAttribute('href', 'mailto:sardarmohamad96@gmail.com');
});

test('shows the featured full-stack project and source link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'ShopZone' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /open shopzone source code/i })).toHaveAttribute('href', 'https://github.com/sardarMrashed/shopzone-ecommerce');
});

test('mobile navigation can be expanded', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: /open navigation/i });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
});
