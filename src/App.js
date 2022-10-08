import './App.css';
import About from './components/About'
import Home from './components/Home'
import Users from './components/Users'
import ErrorPage from './components/ErrorPage'
import { BrowserRouter as Router,
  Routes,
  Route,
  Link, 
  NavLink} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
           
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
