import mysql.connector

def get_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="rakshitha@3302",  
        database="student_management_system"     
    )
