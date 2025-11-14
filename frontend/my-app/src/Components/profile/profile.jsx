import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [edit, setEdit] = useState(false);
  const [updated, setUpdated] = useState({ name: "", roll: "", email: "", marks: "" });
  const navigate = useNavigate();

  const fetchStudent = async () => {
  try {
    const res = await axios.get(`http://127.0.0.1:5000/student/${id}`);
    setStudent(res.data);
    setUpdated(res.data);
  } catch (err) {
    console.error("Error fetching student:", err);
  }
};


useEffect(() => {
  const loadStudent = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:5000/student/${id}`);
      setStudent(res.data);
      setUpdated(res.data);
    } catch (err) {
      console.error("Error fetching student:", err);
    }
  };

  loadStudent();
}, [id]);


  const handleUpdate = async () => {
    try {
      await axios.put(`http://127.0.0.1:5000/update/${id}`, updated);
      alert("Student updated successfully!");
      setEdit(false);
      fetchStudent();
    } catch (err) {
      alert("Error updating student!");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:5000/delete/${id}`);
      alert("Student deleted successfully!");
      navigate("/home");
    } catch (err) {
      alert("Error deleting student!");
    }
  };

  if (!student) return <h3>Loading student data...</h3>;

  return (
    <div style={{ padding: "40px" }}>
      <h2>Student Profile</h2>

      {edit ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
          <input
            placeholder="Name"
            value={updated.name}
            onChange={(e) => setUpdated({ ...updated, name: e.target.value })}
          />
          <input
            placeholder="Roll No"
            value={updated.roll}
            onChange={(e) => setUpdated({ ...updated, roll: e.target.value })}
          />
          <input
            placeholder="Email"
            value={updated.email}
            onChange={(e) => setUpdated({ ...updated, email: e.target.value })}
          />
          <input
            placeholder="Marks"
            value={updated.marks}
            onChange={(e) => setUpdated({ ...updated, marks: e.target.value })}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div style={{ lineHeight: "1.8" }}>
          <p><b>Name:</b> {student.name}</p>
          <p><b>Roll No:</b> {student.roll || "N/A"}</p>
          <p><b>Email:</b> {student.email || "N/A"}</p>
          <p><b>Marks:</b> {student.marks}</p>
        </div>
      )}

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button onClick={() => setEdit(!edit)}>{edit ? "Cancel" : "Edit"}</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => navigate("/home")}>Back</button>
      </div>
    </div>
  );
};

export default Profile;
