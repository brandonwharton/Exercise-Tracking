import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/add">Add Workout</Link>
        </div>
    )
}

export default Navbar;