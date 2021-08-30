import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddWorkout from './AddWorkout';

describe('AddWorkout component', () => {
    describe('renders', () => {
        test('a heading', () => {
            render(<AddWorkout />);
    
            const heading = screen.getByText('Add A Workout');
            expect(heading).toBeInTheDocument();
        })
    
        test('a description field', () => {
            render(<AddWorkout />);
    
            const input = screen.getByTestId('descriptionInput');
            expect(input).toBeInTheDocument();
        })
    
        test('a select menu for workout type', () => {
            render(<AddWorkout />);
    
            const select = screen.getByLabelText('Workout Type');
            expect(select).toBeInTheDocument();
        })
    
        test('a date picker', () => {
            render(<AddWorkout />);
    
            const input = screen.getByTestId('dateInput');
            expect(input).toBeInTheDocument();
        })
    
        test('a submit button', () => {
            render(<AddWorkout />);
    
            const button = screen.getByText('Submit');
            expect(button).toBeInTheDocument();
        })
    })

    describe('changes state as form is filled for', () => {
        test('description input', () => {
            render(<AddWorkout />);

            const input = screen.getByTestId('descriptionInput');
            userEvent.type(input, 'Reached my personal best!');

            const filledInput = screen.getByDisplayValue('Reached my personal best!');
            expect(filledInput).toBeInTheDocument();
        })

        test('workout select menu',  () => {
            render(<AddWorkout />);

            const select = screen.getByLabelText('Workout Type');
            userEvent.click(select);
            
            const choice = screen.getByText('Climbing');
            userEvent.click(choice);

            // material-UI creates multiple instances of the select options in the
            // background
            const selectedElement = screen.queryAllByText('Climbing')
            expect(selectedElement).not.toBeNull();
        })

        // test('date input', () => {
        //     render(<AddWorkout />);

        //     const select = screen.getByLabelText('Workout Type');
        //     userEvent.click(select);
            
        //     const choice = screen.getByText('Climbing');
        //     userEvent.click(choice);

        //     // material-UI creates multiple instances of the select options in the
        //     // background
        //     const selectedElement = screen.queryAllByText('Climbing')
        //     expect(selectedElement).not.toBeNull();
        // })
    })

})