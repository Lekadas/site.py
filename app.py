from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/contatos")
def contatos():
    return render_template("contatos.html")


if __name__ == "__main__":
    app.run()
