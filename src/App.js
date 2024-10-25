import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import SignUp from './components/SignUp';
import User from './components/User';

function App() {
    document.body.style.backgroundColor = '#202020';
    document.body.style.color = 'white'
    return (
        <>
            {/* We want to use NoteState at globally that's why we wrap all the Code inside the NoteState It will accessible to all children and parent */}
            {/* NoteState ke andar sab wrap kar dunga, iss se ye hoga ki, state mai jitni bhi values hogi voa sare har component or component andar ke bhi component ke pass hogi state ki values */}
            <NoteState>
                <Router>
                    <Nav />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/user' element={<User />} />
                        <Route exact path='/About' element={<About />} />
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/signup' element={<SignUp />} />
                    </Routes>
                </Router>
            </NoteState>
        </>
    );
}

export default App;
