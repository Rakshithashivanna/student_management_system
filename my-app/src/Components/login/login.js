import React from 'react';
import './login.css'
export  default function  Login(){
 return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="login-title">Admin Panel</h2>

        <form >
          <div className="input-group">
            <label>UserName</label>
            <input 
              type="userName" 
              placeholder="Enter admin email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}