import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    let history = useNavigate();
    const [credential, setCredential] = useState({ email: "", password: "" });

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = credential;
        const login = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const json = await login.json();
        if (json.LogedIn) {
            localStorage.setItem('token', json.authToken);
            history('/');
        } else {
            setCredential({ email: "", password: "" })
            alert('Invalid Credential')
        }
    }

    return (
        <>
            { !localStorage.getItem('token') ?
                <div className='container my-4'>
                    <h2 className='my-5'>Login for your textNote</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" value={credential.email} onChange={onChange} required />
                            <div id="emailHelp" className="form-text text-danger">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' id="password" aria-describedby='passwordHelp' value={credential.password} onChange={onChange} required />
                            <div id="passwordHelp" className="form-text text-danger">Your password is encrypted which is not readable by anyone.</div>
                        </div>
                        <button type="submit" disabled={credential.email.length < 6 || credential.password.length < 5} className="btn btn-primary">Login</button>
                    </form>
                </div>
                :
                history('/')
            }
        </>
    )
}

export default Login