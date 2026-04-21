from flask import Flask,request,jsonify
import numpy as np
import joblib

app=Flask(__name__)

#loading the model
model=joblib.load('model.pkl')
scaler=joblib.load('scaler.pkl')

columns = ['fixed_acidity','volatile_acidity','citric_acid',
           'residual_sugar','chlorides','free_sulfur_dioxide',
           'total_sulfur_dioxide','density','ph','sulphates','alcohol']
@app.route('/predict',methods=['POST'])
def predict():
    try:
        data = request.json
        print(data)  # DEBUG

        values = [float(data[col]) for col in columns]

        arr = np.array([values])
        arr = scaler.transform(arr)

        pred = model.predict(arr)

        label = "Good" if pred[0] == 1 else "Bad"

        return jsonify({
            "prediction": int(pred[0]),
            "Quality": label
        })

    except Exception as e:
        return jsonify({"error": str(e)})    

#server run
if __name__ == '__main__':
    app.run(debug=True)
