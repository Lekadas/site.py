from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def hello():
    return """
  <body style="background-color: #0000FF; margin: 0; padding: 0; font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh;">
        <div style="text-align: center; color: white;">
            <h1>HomePage</h1>
            <p>Bem-vindo ao meu portfólio!</p>
            <a href="/contatos">
                <button style="padding: 10px 20px; font-size: 16px; cursor: pointer; background-color: #4CAF50; color: white; border: none; border-radius: 5px;">
                    Ir para Contatos
                </button>
            </a>
        </div>
    </body>
    """

@app.route("/contatos")
def about():
    return """
    <p>Contatos:</p>
    <p>Número: (11) 94087-6963</p>
    <p>E-mail: bolognacorsoleandro@gmail.com</p>
    <p>Linkedin: <a href="https://www.linkedin.com/in/leandro-bologna-corso/" target="_blank">https://www.linkedin.com/in/leandro-bolognacorso/</a></p>
    <p><a href="/static/curriculo.pdf" target="_blank">Baixar Currículo (PDF)</a></p>
    """


if __name__ == "__main__":
    app.run(debug=True, host="192.168.0.105", port=5000)