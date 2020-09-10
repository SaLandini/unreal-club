import sqlite3
import base64
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/create', methods=('GET', 'POST'))
def create():
    try:
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
            return redirect(url_for('create'))
        else:
            return render_template('Upload.html')
    except:
        return redirect(url_for('create'))


if __name__ == '__main__':
    app.run(debug=True)
