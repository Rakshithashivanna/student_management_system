from flask import Flask
from flask_mysqldb import MySQL



app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'rakshitha@3302'
app.config['MYSQL_DB'] = 'student_management_system'

mysql = MySQL(app)


@app.route("/admin")
def admin():
    return "This is the admin page"

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(debug=True)