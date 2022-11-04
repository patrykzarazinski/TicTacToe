from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/game', methods=['POST'])
def game():
    firstName = request.form.get('firstName')
    secondName = request.form.get('secondName')
    return render_template('game.html', playerOne=firstName, playerTwo=secondName)