import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Navbar from '../Navbar/Navbar';
import PastWorkouts from '../PastWorkouts/PastWorkouts';
import AddWorkout from '../AddWorkout/AddWorkout';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
