
import './App.css';
import Login from './Components/login/login';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './Components/home/home';
import Profile from './Components/profile/profile';
import AddStudent from './Components/AddStudent/AddStudent'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/add" element={<AddStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
