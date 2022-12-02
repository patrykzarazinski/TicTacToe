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


@app.route('/test')
def test():
    return render_template('test.html')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
