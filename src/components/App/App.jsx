import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import About from '../About/About.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">GitHub Student List</h1>
            </header>
            <br/>

            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/StudentList'>Student List</Link>
                        </li>
                        <li>
                            <Link to='/About'>About</Link>
                        </li>
                    </ul>
                </nav>
                <Route path='/' exact>
                    <StudentForm />
                </Route>
                <Route path='/StudentList' exact>
                    <StudentList />
                </Route>
                <Route path='/About' exact>
                    <About />
                </Route>
            </Router>
        </div>
    );
}

export default App;
