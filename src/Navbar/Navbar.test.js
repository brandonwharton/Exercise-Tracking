import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

test('renders home link', () => {
    render(<Router>
            <Navbar />
           </Router>);

    const home = screen.getByText('Home');
    expect(home).toBeInTheDocument();
})