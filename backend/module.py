def create_table(mysql):
    con = mysql.connection.cursor()

    con.execute('''CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        roll INT UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        marks INT
    )''')

    con.execute('''CREATE TABLE IF NOT EXISTS admin (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL
    )''')

    mysql.connection.commit()
    con.close()
