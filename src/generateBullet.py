from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import dotenv_values

app = Flask(__name__)
CORS(app, origins="*")
client = OpenAI(
    # This is the default and can be omitted
    api_key=dotenv_values(".env")["OPENAI_API_KEY"]
)

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
    customizeString = ""

    # check if tags were selected
    if len(tags) > 0:
        customizeString = " Please make it have the following traits: "
        for tag in tags:
            customizeString += tag + ", "
        customizeString = customizeString[:-2] + "."

    print("customizeString:", customizeString)

    # call OpenAI API to get generated text
    # chat_completion = client.chat.completions.create(
    #     messages=[
    #         {"role": "user", "content": "Revise this sentence: " + currentBullet + "." + customizeString},
    #     ],
    #     model="gpt-3.5-turbo",
    #     max_tokens=250,
    # )

    # generated_text = chat_completion.choices[0].message.content.strip()
    # print(generated_text)

    outputDict = {"output": "You entered '" + currentBullet + "' with tags: " + str(tags)}
    # outputDict = {"output": generated_text}
    return jsonify(outputDict)

if __name__ == '__main__':
    app.run(port=8000, debug=True)