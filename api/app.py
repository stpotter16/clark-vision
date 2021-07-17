import flask

app = flask.Flask(__name__)

@app.route('/message')
def index():
    return {"message": "Hello, World"}
