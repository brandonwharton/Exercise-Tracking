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
import { useEffect } from 'react';


function AddWorkout() {
    const [formObject, setFormObject] = useState({
        description: '',
        workoutType: 1,
        date: ''
    })

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        // GET all activities on load for Select dropdown
        axios.get('/api/activity')
        .then(response => {
            setActivities(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])




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
                    {activities.map(activity => {
                        return (
                        <MenuItem value={activity.id} key={activity.id}>
                            {activity.name}
                        </MenuItem>
                        )
                    })}
                </Select>
                <DatePicker
                    label="Date"
                    value={formObject.date}
                    onChange={newValue => handleFormChange('date', newValue)}
                    renderInput={(params) => <TextField {...params} />}
                    InputProps={{
                        "data-testid": "date-picker",
                    }}
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