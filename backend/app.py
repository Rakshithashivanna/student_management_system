from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from db import get_connection
from module import create_table

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'rakshitha@3302'
app.config['MYSQL_DB'] = 'student_management_system'

mysql = get_connection(app)

with app.app_context():
    create_table(mysql)

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data['username']
    password = data['password']
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM admin WHERE username=%s AND password=%s", (username, password))
    user = cur.fetchone()
    cur.close()
    if user:
        return jsonify({"message": "Login success"}), 200
    return jsonify({"error": "Invalid credentials"}), 401

@app.route('/add', methods=['POST'])
def add_student():
    data = request.json
    name = data['name']
    roll = data['roll']
    email = data['email']
    marks = data['marks']
    
    cur = mysql.connection.cursor()
    cur.execute(
        "INSERT INTO student(Name, Roll_No, Email, Marks) VALUES(%s, %s, %s, %s)", 
        (name, roll, email, marks)
    )
    mysql.connection.commit()
    cur.close()
    return jsonify({"message": "Student added successfully"})

@app.route('/students', methods=['GET'])
def get_students():
    sort_by = request.args.get('sort_by')
    cur = mysql.connection.cursor()

    if sort_by == 'name':
        cur.execute("SELECT id, name, marks FROM student ORDER BY name ASC")
    elif sort_by == 'marks':
        cur.execute("SELECT id, name, marks FROM student ORDER BY marks DESC")
    else:
        cur.execute("SELECT id, name, marks FROM student")

    students = cur.fetchall()
    cur.close()

    student_list = [{"slno": i + 1,  "name": s[1], "marks": s[2]} for i, s in enumerate(students)]
    return jsonify(student_list)

@app.route('/student/<int:id>', methods=['GET'])
def get_student(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT id, name, roll_no, email, marks FROM student WHERE id = %s", (id,))
    
    row = cur.fetchone()
    cur.close()

    if row:
        return jsonify({
            "id": row[0],
            "name": row[1],
            "roll": row[2],
            "email": row[3],
            "marks": row[4]
        })
    else:
        return jsonify({"error": "Student not found"}), 404


@app.route('/update/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.json
    name = data['name']
    roll = data['roll']
    email = data['email']
    marks = data['marks']
    
    cur = mysql.connection.cursor()
    cur.execute(
        "UPDATE student SET Name=%s, Roll_No=%s, Email=%s, Marks=%s WHERE id=%s",
        (name, roll, email, marks, id)
    )
    mysql.connection.commit()
    cur.close()
    return jsonify({"message": "Student updated successfully"})


@app.route('/delete/<int:id>', methods=['DELETE'])
def delete_student(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM student WHERE id=%s", [id])
    mysql.connection.commit()
    cur.close()
    return jsonify({"message": "Student deleted successfully"})

if __name__ == "__main__":
    app.run(debug=True)
