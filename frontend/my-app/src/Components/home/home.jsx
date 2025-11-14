import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async (orderBy = null) => {
    let url = "http://127.0.0.1:5000/students";
    if (orderBy) url += `?sort_by=${orderBy}`;
    const res = await axios.get(url);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const viewStudent = (id) => {
    navigate(`/profile/${id}`);
  };

  const handleAddStudent = () => {
    navigate("/add");
  };

  return (
    <div className="home-container">
      <div className="header">
        <h2>Student List</h2>
        <button 
        className="add-student-btn"
        onClick={() => handleAddStudent()}
        style={{ position: "absolute", top: "20px", right: "20px" }}
      >
        Add Student
      </button>
      
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu, index) => (
  <tr key={index}>
    <td>{stu.slno}</td>
    <td>{stu.name}</td>
    <td>{stu.marks}</td>
    <td>
      <button className="view-btn" onClick={() => viewStudent(stu.slno)}>
        View
      </button>
    </td>
  </tr>
))}

        </tbody>
      </table>

      <div className="sort-buttons">
        <button onClick={() => fetchStudents("name")}>Order by Name</button>
        <button onClick={() => fetchStudents("marks")}>Order by Marks</button>
      </div>
    </div>
  );
}
