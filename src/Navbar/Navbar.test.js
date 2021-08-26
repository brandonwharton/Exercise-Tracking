import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('home link', () => {
    test('renders correctly', () => {
        render(<Router>
                <Navbar />
               </Router>);
    
        const home = screen.getByText('Home');
        expect(home).toBeInTheDocument();
    })

    test('navigates to home page', () => {
        render(<Router>
                <Navbar />
               </Router>);

        const homeButton = screen.getByText('Home');
        const leftClick = {button: 0}
        userEvent.click(homeButton, leftClick);
        
        const heading = screen.getByText('Your Past Workouts');
        expect(heading).toBeInTheDocument();
    })





})
