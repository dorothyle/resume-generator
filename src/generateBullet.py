from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*")

@app.route('/')
def home():
    return "Hello, Flask!"

@app.route('/generate', methods=["POST"])
def generateBullet():
    # param: current bullet, tags
    currentBullet = request.json['text']
    tags = request.json['tags']
    print("current bullet:", currentBullet)
    print("tags:", tags)
    outputDict = {"output": "You entered X" + currentBullet + "X with tags: " + str(tags)}
    return jsonify(outputDict)

if __name__ == '__main__':
    app.run(port=5000, debug=True)