import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
df=pd.read_csv('WineQT.csv') 
from sklearn.preprocessing import StandardScaler
SC=StandardScaler()
df['Encode']=df['quality'].apply(lambda x:1 if x>=6 else 0)
X=df.drop(['quality','Id','Encode'],axis=1)
X_scale=SC.fit_transform(X)
Y=df['Encode']
X_train,X_test,Y_train,Y_test=train_test_split(X_scale,Y,test_size=0.2,random_state=42)
model=RandomForestClassifier()
model.fit(X_train,Y_train)
Y_pred=model.predict(X_test)
Y_pred
from sklearn.metrics import accuracy_score
print('Accuracy is ',accuracy_score(Y_test,Y_pred))
import joblib

joblib.dump(model, "model.pkl")
joblib.dump(SC, "scaler.pkl")

