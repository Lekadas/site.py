from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template("index.html")

@app.route("/contatos")
def about():
    return render_template("contatos.html")


if __name__ == "__main__":
    app.run(debug=True, host="192.168.0.105", port=5000)