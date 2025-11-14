import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css";

export default function AddStudent() {
  const [student, setStudent] = useState({ name: "", roll: "", email: "", marks: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5000/add", student);

      alert("Student added successfully!");

      navigate("/home", { replace: true });
    } catch (err) {
      console.error(err);
      alert("Error adding student.");
    }
  };

  return (
    <div className="add-student-container">
      <div className="add-student-card">
        <h2>Add New Student</h2>
        <form className="add-student-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Enter Name" onChange={handleChange} required />
          <input name="roll" placeholder="Enter Roll No" onChange={handleChange} required />
          <input name="email" placeholder="Enter Email" onChange={handleChange} required />
          <input name="marks" placeholder="Enter Marks" onChange={handleChange} required />
          <button type="submit">Add Student</button>
        </form>
        <button className="back-btn" onClick={() => navigate("/home")}>← Back to Home</button>
      </div>
    </div>
  );
}
