import sqlite3

connection = sqlite3.connect('database.db')

with open('base.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO posts (author,content) VALUES (?,?)",
            ('test_author','test_content')
            )

connection.commit()
connection.close()