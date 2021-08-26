import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import Header from './Header';

test('renders header text', () => {
    render(<Header />);

    const header = screen.getByText('Exercise Tracker');

    expect(header).toBeInTheDocument();
})