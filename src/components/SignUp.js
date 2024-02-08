import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    let navigate = useNavigate();
    const [credential, setCredential] = useState({ name: "", email: "", password: "", cpassword: "", gender: "Male" });
    
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    
    const handleSignUp = async (e) => {
        e.preventDefault()
        const { name, email, password, cpassword, gender } = credential;
        if (password !== cpassword) {
            setCredential({ name: name, email: email, password: "", cpassword: "" })
            return alert('Please make sure your password is the same in both "Password" and "Confirm Password" fields.');
        }

        try {
            const signup = await fetch('http://localhost:5000/api/auth/createuser', {
                method: "POST",
                headers: {
                    "Accept": "*/*",
                    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password, gender })
            })
            const json = await signup.json();
            if (json.Signed) {
                localStorage.setItem('token', json.authToken);
                navigate('/');
            } else {
                alert(json.message)
            }
        } catch (error) {
            console.log(error);
            setCredential({ name: "", email: "", password: "", cpassword: "" })
            alert(`Server issue: Check backend code`);
        }
    }

    return (
        <>
            {!localStorage.getItem('token') ?
                <div className='container my-4'>
                    <h2 className='my-5'>Sign Up for new user</h2>
                    <form onSubmit={handleSignUp}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' id="name" aria-describedby="nameHelp" value={credential.name} onChange={onChange} required />
                            <div id="nameHelp" className="form-text text-danger">Length should be more than 3 and Required field.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select className="form-select" name='gender' id='gender' aria-describedby='genderHelp' value={credential.gender} onChange={onChange} aria-label="Default select example" required>
                                <option value="Male" defaultValue={"Male"}>Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                            </select>
                            <div id="genderHelp" className="form-text text-danger">You have only this chance to describe your gender</div>
                        </div>
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
                        <div className="mb-3">
                            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" name='cpassword' id="cpassword" aria-describedby='cpasswordHelp' value={credential.cpassword} onChange={onChange} required />
                            <div id="cpasswordHelp" className="form-text text-danger">This field should be match with password.</div>
                        </div>
                        <button type="submit" disabled={credential.name.length < 3 || credential.password.length < 5} className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
                :
                navigate('/')
            }
        </>
    )
}

export default SignUp