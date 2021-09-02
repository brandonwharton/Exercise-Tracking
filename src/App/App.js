import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Navbar from '../Navbar/Navbar';
import PastWorkouts from '../PastWorkouts/PastWorkouts';
import AddWorkout from '../AddWorkout/AddWorkout';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function App() {
  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App-header">
          <Header />
          <Navbar />
          <Route path="/" exact>
            <PastWorkouts />
          </Route>
          <Route path="/add">
            <AddWorkout />
          </Route>
        </div>
      </LocalizationProvider>
    </Router>
  );
}

export default App;
