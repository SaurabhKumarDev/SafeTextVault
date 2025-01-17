<<<<<<< HEAD
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserIcon from '../image/profile-user.png';

const NavBar = () => {
    const location = useLocation()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">SafeTextVault</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : ''} `} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/About' ? "active" : ''} `} to="/About">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ?
                        <div className="d-inline-flex gap-2">
                            <Link to="/login" className="btn btn-primary" role="button">LogIn</Link>
                            <Link to="/signup" className="btn btn-primary" role="button">SignUp</Link>
                        </div> :
                        <div className='d-inline-flex gap-2'>
                            <Link to='/User' className='mx-2'><img src={UserIcon} alt='User' height={40} /></Link>
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
}

=======
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserIcon from '../image/profile-user.png';

const NavBar = () => {
    const location = useLocation()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">SafeTextVault</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : ''} `} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/About' ? "active" : ''} `} to="/About">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ?
                        <div className="d-inline-flex gap-2">
                            <Link to="/login" className="btn btn-primary" role="button">LogIn</Link>
                            <Link to="/signup" className="btn btn-primary" role="button">SignUp</Link>
                        </div> :
                        <div className='d-inline-flex gap-2'>
                            <Link to='/User' className='mx-2'><img src={UserIcon} alt='User' height={40} /></Link>
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
}

>>>>>>> 5c139e9c2b9a072993d12efc6f18df2160f25ae4
export default NavBar;