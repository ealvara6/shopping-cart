import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('button component', () => {
  it('renders correct name', () => {
    render(<Button name="test name" />);

    const button = screen.getByRole('button', { name: 'test name' });

    expect(button).toBeInTheDocument();
  });
});
