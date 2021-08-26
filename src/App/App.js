import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App-header">
        <Header />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
