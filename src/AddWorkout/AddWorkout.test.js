import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddWorkout from './AddWorkout';

describe('AddWorkout component', () => {
    test('renders a heading', () => {
        render(<AddWorkout />);

        const heading = screen.getByText('Add A Workout');
        expect(heading).toBeInTheDocument();
    })

    test('renders a description field', () => {
        render(<AddWorkout />);

        const input = screen.getByTestId('descriptionInput');
        expect(input).toBeInTheDocument();
    })

    test('renders a select menu for type', () => {
        render(<AddWorkout />);

        const select = screen.getByLabelText('Workout Type');
        expect(select).toBeInTheDocument();
    })

    test('renders a date picker', () => {
        render(<AddWorkout />);

        const input = screen.getByTestId('dateInput');
        expect(input).toBeInTheDocument();
    })

    test('renders a submit button', () => {
        render(<AddWorkout />);

        const button = screen.getByText('Submit');
        expect(button).toBeInTheDocument();
    })
})