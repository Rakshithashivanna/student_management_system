# Student Management System

A full-stack web application to manage student records efficiently. The system allows secure admin login, adding, updating, deleting, and viewing students with sorting options by name or marks.

---

## Features
- Secure admin login with hashed passwords.
- Add, update, delete, and view student records.
- Sort students by name or marks.
- Responsive and intuitive user interface for easy navigation.
- Real-time updates for seamless experience.

---

## Tech Stack
- **Frontend:** React.js  
- **Backend:** Flask  
- **Database:** MySQL  
- **Other Tools:** Flask-CORS, Flask-MySQLdb, Werkzeug (for password hashing)

---

## Installation

### Backend
# Clone the repository
git clone https://github.com/Rakshithashivanna/student_management_system.git
cd student_management_system/backend

# Create and activate a virtual environment
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate

# Install backend dependencies
pip install -r requirements.txt

# Set up MySQL database
# Open MySQL shell and run:
CREATE DATABASE student_management_system;

# Run the backend
python app.py

###Frontend
cd ../frontend/my-app
# Install dependencies
npm install
# Run the frontend
npm start

