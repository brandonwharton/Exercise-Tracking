import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Router } from 'react-router-dom';
import Navbar from './Navbar';
import { createMemoryHistory } from 'history';

describe('home link', () => {
    test('renders correctly', () => {
        const history = createMemoryHistory();

        render(<Router history={history}>
                <Navbar />
               </Router>);
    
        const home = screen.getByText('Home');
        expect(home).toBeInTheDocument();
    })

    test('navigates to home page', () => {
        const history = createMemoryHistory();

        render(<Router history={history}>
                <Navbar />
               </Router>);

        const homeButton = screen.getByText('Home');
        userEvent.click(homeButton);
        
        // const heading = screen.getByText('Your Past Workouts');
        expect(history.location.pathname).toEqual('/');
    })





})
