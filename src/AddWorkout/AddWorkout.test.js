import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddWorkout from './AddWorkout';

describe('AddWorkout component', () => {
    test('renders a heading', () => {
        render(<AddWorkout />);

        const heading = screen.getByText('Add A Workout');
        expect(heading).toBeInTheDocument();
    })

    test('contains a description field', () => {
        render(<AddWorkout />);

        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    })

    test('contains a select menu for type', () => {
        render(<AddWorkout />);

        const select = screen.getByLabelText('Workout Type');
        expect(select).toBeInTheDocument();
    })
})