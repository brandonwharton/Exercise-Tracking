import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';

function AddWorkout() {
    const [workoutType, setWorkoutType] = useState('default');


    return (
        <div>
            <Typography component="h2" variant="h3">
                Add A Workout
            </Typography>
            <form>
                <TextField
                    type="text"
                    label="Description"
                />
                <InputLabel id="workoutTypeLabel">Workout Type</InputLabel>
                <Select
                    value={workoutType}
                    labelId="workoutTypeLabel"
                >
                    <MenuItem value={'default'}>Choose one</MenuItem>
                    <MenuItem value={'climbing'}>Climbing</MenuItem>
                </Select>
            </form>
        </div>
    )
}

export default AddWorkout;