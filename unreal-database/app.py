import sqlite3
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/create', methods=('GET', 'POST'))
def create():
    if request.method == 'POST':
        author = request.form['author']
        content = request.files['image']

        db = sqlite3.connect('database.db')
        conn = db.cursor()
        
        sqlite_insert = """ INSERT INTO posts (content, author) VALUES (?, ?)"""
        contentNew = content.read()
        
        conn.execute(sqlite_insert,(contentNew, author))
        
        db.commit()
        conn.close()
        return redirect(url_for('show'))
    else:
        return render_template('Upload.html')

@app.route('/upload', methods=('GET', 'POST'))
def upload():
    pass

@app.route('/show', methods=('GET','POST'))
def show():
    conn = sqlite3.connect('database.db')
    posts = conn.execute('SELECT rowid, * FROM "posts"').fetchall()
    return render_template('Show.html', posts=posts)


if __name__ == '__main__':
    app.run(debug=True)
