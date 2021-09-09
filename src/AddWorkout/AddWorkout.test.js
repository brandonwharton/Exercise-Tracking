import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddWorkout from './AddWorkout';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

describe('AddWorkout component', () => {
    describe('renders', () => {
        test('a heading', () => {
            render(<LocalizationProvider dateAdapter={AdapterDateFns}><AddWorkout /></LocalizationProvider>);
    
            const heading = screen.getByText('Add A Workout');
            expect(heading).toBeInTheDocument();
        })
    
        test('a description field', () => {
            render(<LocalizationProvider dateAdapter={AdapterDateFns}><AddWorkout /></LocalizationProvider>);
    
            const input = screen.getByLabelText('description');
            expect(input).toBeInTheDocument();
        })
    
        test('a select menu for workout type', () => {
            render(<LocalizationProvider dateAdapter={AdapterDateFns}><AddWorkout /></LocalizationProvider>);
    
            const select = screen.getByLabelText('Workout Type');
            expect(select).toBeInTheDocument();
        })
        
        // need to come back to date picker tests

        // test('a date picker', () => {

        //     render(<LocalizationProvider dateAdapter={AdapterDateFns}><AddWorkout /></LocalizationProvider>);
    
        //     const input = screen.getByDisplayValue(new Date());
        //     expect(input).toBeInTheDocument();
        // })
    
        test('a submit button', () => {
            render(<LocalizationProvider dateAdapter={AdapterDateFns}><AddWorkout /></LocalizationProvider>);
    
            const button = screen.getByText('Submit');
            expect(button).toBeInTheDocument();
        })
    })

    describe('changes state as form is filled for', () => {
        test('description input', () => {
            render(<LocalizationProvider dateAdapter={AdapterDateFns}><AddWorkout /></LocalizationProvider>);

            const input = screen.getByLabelText('description');
            userEvent.type(input, 'Reached my personal best!');

            const filledInput = screen.getByDisplayValue('Reached my personal best!');
            expect(filledInput).toBeInTheDocument();
        })

        // test('workout select menu',  () => {
        //     render(<LocalizationProvider dateAdapter={AdapterDateFns}><AddWorkout /></LocalizationProvider>);

        //     const select = screen.getByLabelText('Workout Type');
        //     userEvent.click(select);
            
        //     const choice = screen.getByText('Climbing');
        //     userEvent.click(choice);

        //     // material-UI creates multiple instances of the select options in the
        //     // background
        //     const selectedElement = screen.queryAllByText('Climbing')
        //     expect(selectedElement).not.toBeNull();
        // })

        // need to come back to date input tests

        // test('date input', () => {
        //     render(<LocalizationProvider dateAdapter={AdapterDateFns}><AddWorkout /></LocalizationProvider>);

        //     // const input = screen.getByPlaceholderText('Date');
        //     const input = screen.getByTestId('date-picker')
        //     // const input = screen.findByRole('textbox', { name: 'Date'})
        //     userEvent.type(input, '01012001', {delay: 1});


        //     const displayedDate = screen.getByDisplayValue('01/01/2001');
        //     // const displayedDate2 = screen.getByPlaceholderText('2001-01-01');
        //     // expect(displayedDate).toBeInTheDocument();
        //     expect(displayedDate).toBeInTheDocument();
        // })
    })

    // describe('has a submit function that', () => {
    //     test('fires on click of button', () => {
    //         render(<LocalizationProvider dateAdapter={AdapterDateFns}><AddWorkout /></LocalizationProvider>);
    
    //         const button = screen.getByText('Submit');
    //         userEvent.click(button);

            
    //     })
    // })

})