import React ,{useState}from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export  default function  Login(){
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const [message, setMessage] = useState("");
const navigate=useNavigate();
const handleLogin=async(e)=>{e.preventDefault();
  try{
    const res =await axios.post("http://127.0.0.1:5000/login",{username,password});
    if (res.data.message === "Login success") {
      setMessage(" Login successful!");
      alert("Login Succefully");
      navigate("/home");
    }   
  }catch{
     setMessage(" Invalid credentials");
    alert("Invalid credentials")
  }
}
    
 return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="login-title">Admin Panel</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>UserName</label>
            <input 
              type="userName" 
              placeholder="Enter admin email"
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn" >Login</button>
        </form>
        {message && <p className="login-message">{message}</p>}
      </div>
    </div>
  );
}