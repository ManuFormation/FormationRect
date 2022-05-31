import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  test('it should mount', () => {
    render(<Navbar />);
    
    const navBar = screen.getByTestId('NavBar');

    expect(navBar).toBeInTheDocument();
  });
});