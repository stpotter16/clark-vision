import io

from flask import Flask, send_file
import numpy as np
from PIL import Image

SANDBOX_ID = 'sandbox'

app = Flask(__name__)

@app.route('/api/message')
def index():
    return {"message": "Hello, World"}

@app.route('/api/image/<image_id>')
def get_image_by_id(image_id):
    if image_id.startswith(SANDBOX_ID):
        image = _make_test_image()
        return _send_image(image)
    return {}


def _make_test_image():
    arr = np.zeros((500, 500))
    height, width = arr.shape
    size = 20
    xs = np.random.randint(5, high=height - 5, size=size)
    ys = np.random.randint(5, high=width - 5, size=size)
    for x, y in zip(xs, ys):
        arr[x - 5:x + 5, y - 5:y + 5] = 1.0
    return Image.fromarray(np.uint8(arr * 255))


def _send_image(image):
    buffer = io.BytesIO()
    image.save(buffer, format="PNG")
    buffer.seek(0)
    return send_file(buffer,mimetype='image/png')
