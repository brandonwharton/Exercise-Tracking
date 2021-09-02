import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import DatePicker from '@mui/lab/DatePicker'

import { useState } from 'react';
import axios from 'axios';


function AddWorkout() {
    const [formObject, setFormObject] = useState({
        description: '',
        workoutType: 'default',
        date: new Date()
    })

    const handleFormChange = (source, value) => {
        setFormObject({
            ...formObject,
            [source]: value
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        axios.post('/api/workouts', formObject)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }



    return (
        <div>
            <Typography component="h2" variant="h3">
                Add A Workout
            </Typography>
            <form onSubmit={event => handleFormSubmit(event)}>
                <TextareaAutosize
                    type="text"
                    aria-label="description"
                    placeholder="Description"
                    onChange={event => handleFormChange('description', event.target.value)}
                    value={formObject.description}
                />
                <InputLabel id="workoutTypeLabel">Workout Type</InputLabel>
                <Select
                    value={formObject.workoutType}
                    labelId="workoutTypeLabel"
                    onChange={event => handleFormChange('workoutType', event.target.value)}
                >
                    <MenuItem value={'default'}>Choose one</MenuItem>
                    <MenuItem value={'climbing'}>Climbing</MenuItem>
                </Select>
                <DatePicker
                    label="Date"
                    value={formObject.date}
                    onChange={newValue => handleFormChange('date', newValue)}
                    renderInput={(params) => <TextField {...params} />}
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