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
    if image_id == SANDBOX_ID:
        image = _make_test_image()
        return _send_image(image)
    return {}


def _make_test_image():
    np.random.seed(42)
    arr = np.random.rand(500, 500) * 255
    return Image.fromarray(np.uint8(arr))


def _send_image(image):
    buffer = io.BytesIO()
    image.save(buffer, format="PNG")
    buffer.seek(0)
    return send_file(buffer,mimetype='image/png')
