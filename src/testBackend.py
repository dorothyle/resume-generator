from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*")

@app.route('/')
def home():
    return "Hello, Flask!"

@app.route("/greeting", methods=["GET"])
def greet():
    return "Hello, world!"

@app.route("/greeting", methods=["POST"])
def greetPerson():
    guestList = request.json['guestList']
    name = request.json['name']
    # guestList.append(name)
    request.json['guestList'].append(name)
    # add to the request itself (not saving bc output isnt saved anywhere)

    # TODO: add name param and replace world with name param
    return request.json

@app.route("/modify", methods=["POST"])
def updatePerson():
    print("REQUEST:", request.get_data())
    print("HEADER:", request.headers["Content-Type"])
    if request.is_json:
        data = request.json
        print('Received JSON data:', data)  # Debugging: Print received data
        # Your data modification logic here
        print(jsonify({'message': 'Data modified successfully'}))
    else:
        print("request is NOT a json ;(")
        print(jsonify({'error': 'No JSON data received'}))

    updatedPerson = request.json
    # updatedPerson = request.get_json(force=True)
    print("updated person: ", updatedPerson)
    updatedPerson["age"] += 1
    print("age is updated")
    return jsonify(updatedPerson)

if __name__ == '__main__':
    app.run(port=6000, debug=True)