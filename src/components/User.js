<<<<<<< HEAD
import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';

function User() {
    const navigate = useNavigate();
    const { getNotes, notes } = useContext(noteContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/getuser', {
                    method: "POST",
                    headers: {
                        "Accept": "*/*",
                        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem('token')
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const userData = await response.json();
                setUser(userData);
                getNotes(); // Fetching notes after user data is retrieved
            } catch (error) {
                console.error("Error fetching user data:", error);
                navigate('/login');
            }
        };

        if (!localStorage.getItem('token')) {
            navigate('/login');
        } else {
            fetchData();
        }
    }, [navigate, getNotes]);

    const handleLogOut = () => {
        localStorage.removeItem('token');
        console.log("Token removed",localStorage.getItem('token'));
    }

    return (
        <>
            <div className="container my-5 d-flex justify-content-center align-items-center">
                {user && (
                    <div className="card pt-5 bg-dark text-light">
                        <div className="user text-center">
                            <div className="profile">
                                {user.User.gender === 'Male' && <img src="https://images.pexels.com/photos/12158581/pexels-photo-12158581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-circle" width="200" alt="Male" />}
                                {user.User.gender === 'Female' && <img src="https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-circle" width="80" alt="Female" />}
                                {user.User.gender === 'Transgender' && <img src="https://images.pexels.com/photos/1412136/pexels-photo-1412136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-circle" width="80" alt="Transgender" />}
                            </div>
                        </div>

                        <div className="mt-5 text-center">
                            <h3 className="mb-0">{user.User.name}</h3>
                            <span className="text-light mb-3 mt-2 d-block mb-2">{user.User.email}</span>
                            <button className="btn btn-primary btn-sm follow"><Link to="/" className='text-light link-underline link-underline-opacity-0'>Explore</Link></button>

                            <div className="d-flex gap-4 justify-content-between align-items-center my-4 px-4">
                                <div className="stats">
                                    <h6 className="mb-0">Text Note</h6>
                                    <span>{notes.length}</span>
                                </div>

                                <div className="stats">
                                    <h6 className="mb-0">User ID</h6>
                                    <span>{user.User._id}</span>
                                </div>

                                <div className="stats">
                                    <h6 className="mb-0">Creation Time</h6>
                                    <span>{new Date(user.User.date).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='fixed-bottom d-flex justify-content-between my-4 mx-4'>
                <p></p>
                <Link onClick={handleLogOut} to='/login' className="btn btn-primary" role="button">LogOut</Link>
            </div>
        </>
    );
}

=======
import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';

function User() {
    const navigate = useNavigate();
    const { getNotes, notes } = useContext(noteContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/getuser', {
                    method: "POST",
                    headers: {
                        "Accept": "*/*",
                        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem('token')
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const userData = await response.json();
                setUser(userData);
                getNotes(); // Fetching notes after user data is retrieved
            } catch (error) {
                console.error("Error fetching user data:", error);
                navigate('/login');
            }
        };

        if (!localStorage.getItem('token')) {
            navigate('/login');
        } else {
            fetchData();
        }
    }, [navigate, getNotes]);

    const handleLogOut = () => {
        localStorage.removeItem('token');
        console.log("Token removed",localStorage.getItem('token'));
    }

    return (
        <>
            <div className="container my-5 d-flex justify-content-center align-items-center">
                {user && (
                    <div className="card pt-5 bg-dark text-light">
                        <div className="user text-center">
                            <div className="profile">
                                {user.User.gender === 'Male' && <img src="https://images.pexels.com/photos/12158581/pexels-photo-12158581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-circle" width="200" alt="Male" />}
                                {user.User.gender === 'Female' && <img src="https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-circle" width="80" alt="Female" />}
                                {user.User.gender === 'Transgender' && <img src="https://images.pexels.com/photos/1412136/pexels-photo-1412136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-circle" width="80" alt="Transgender" />}
                            </div>
                        </div>

                        <div className="mt-5 text-center">
                            <h3 className="mb-0">{user.User.name}</h3>
                            <span className="text-light mb-3 mt-2 d-block mb-2">{user.User.email}</span>
                            <button className="btn btn-primary btn-sm follow"><Link to="/" className='text-light link-underline link-underline-opacity-0'>Explore</Link></button>

                            <div className="d-flex gap-4 justify-content-between align-items-center my-4 px-4">
                                <div className="stats">
                                    <h6 className="mb-0">Text Note</h6>
                                    <span>{notes.length}</span>
                                </div>

                                <div className="stats">
                                    <h6 className="mb-0">User ID</h6>
                                    <span>{user.User._id}</span>
                                </div>

                                <div className="stats">
                                    <h6 className="mb-0">Creation Time</h6>
                                    <span>{new Date(user.User.date).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='fixed-bottom d-flex justify-content-between my-4 mx-4'>
                <p></p>
                <Link onClick={handleLogOut} to='/login' className="btn btn-primary" role="button">LogOut</Link>
            </div>
        </>
    );
}

>>>>>>> 5c139e9c2b9a072993d12efc6f18df2160f25ae4
export default User;