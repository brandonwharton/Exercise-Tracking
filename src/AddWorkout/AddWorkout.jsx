import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

function AddWorkout() {
    // const [description, setDescription] = useState('');
    // const [workoutType, setWorkoutType] = useState('default');
    // const [date, setDate] = useState('');
    
    const [formObject, setFormObject] = useState({
        description: '',
        workoutType: 'default',
        date: ''
    })

    const handleFormChange = (source, value) => {
        setFormObject({
            ...formObject,
            [source]: value
        });
    }

    return (
        <div>
            <Typography component="h2" variant="h3">
                Add A Workout
            </Typography>
            <form>
                <TextField
                    type="text"
                    label="Description"
                    inputProps={{ "data-testid": "descriptionInput" }}
                    onChange={event => handleFormChange('description', event.target.value)}
                    value={formObject.description}
                />
                <InputLabel id="workoutTypeLabel">Workout Type</InputLabel>
                <Select
                    value={formObject.workoutType}
                    labelId="workoutTypeLabel"
                >
                    <MenuItem value={'default'}>Choose one</MenuItem>
                    <MenuItem value={'climbing'}>Climbing</MenuItem>
                </Select>
                <TextField
                    label="Date"
                    type="date"
                    value={formObject.date}
                    inputProps={{ "data-testid": "dateInput" }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default AddWorkout;