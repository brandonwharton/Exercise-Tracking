const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const workoutsRouter = require('./routes/workouts.router');
const activityRouter = require('./routes/activity.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

// Routes
app.use('/api/workouts', workoutsRouter);
app.use('/api/activity', activityRouter);


// App Set //
const PORT = process.env.PORT || 5000;


/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});