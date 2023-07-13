import { Routes, Route, Link } from 'react-router-dom';
import Page from '../Components/Page';
import Login from '../Util/Login';
import Register from '../Util/Register';

function Guest() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Page/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/> 
                </Routes>
            </div>
        </>
    );
}

export default Guest;