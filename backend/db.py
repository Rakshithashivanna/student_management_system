from flask_mysqldb import MySQL

def get_connection(app):
    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = 'root'
    app.config['MYSQL_PASSWORD'] = 'rakshitha@3302'
    app.config['MYSQL_DB'] = 'student_management_system'    
    return MySQL(app)

