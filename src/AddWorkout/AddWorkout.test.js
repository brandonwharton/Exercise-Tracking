import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddWorkout from './AddWorkout';

describe('AddWorkout component', () => {
    test('renders a heading', () => {
        render(<AddWorkout />);

        const heading = screen.getByText('Add A Workout');
        expect(heading).toBeInTheDocument();
    })
})