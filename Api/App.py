import json
from this import d
from django.http import JsonResponse
from flask import Flask,request
from sqlalchemy import true
from ResumeParser import pdfFileHandler  
from flask_migrate import Migrate, MigrateCommand   
from flask_sqlalchemy import SQLAlchemy 
from flask_cors import CORS 



app = Flask(__name__) 
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost/ResumeParser'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
app.secret_key = 'secret string' 
CORS(app)

db = SQLAlchemy(app)
migrate = Migrate(app,db) 

import models

@app.route("/Login",methods=["GET"])
def login(): 
    res={}
    if  request.method =="GET":
        username = request.args["username"]
        pwd = request.args["password"]
        user = models.User.query.all()
        userObj = list(filter(lambda x: x.UserName==username and x.Password == pwd,user))
        if len(userObj)==1:
            res["login_status"] = 1
            res["username"] = userObj[0].UserName
            res["FirstName"] = userObj[0].FirstName
            res["LastName"] = userObj[0].LastName
             
            return res

        else: 
            res["login_status"] = 0
            return app.response_class(response=json.dumps(res),mimetype="application/json")

@app.route("/Register",methods=["GET"])
def Register():
    res={}
    if request.method == "GET":
        requestData = request.args
        userObj = models.User()
        objs = models.User.query.all()
        usernames = list(filter(lambda x: x.UserName==requestData["UserName"],objs))
        userObj.FirstName = requestData["FirstName"]
        userObj.LastName = requestData["LastName"]
        userObj.UserName = requestData["UserName"]
        userObj.Password = requestData["Password"]
        if len(usernames)>0:
            res["register_status"]=0
            res["Error"] = "Username Already Exists"
            return res
        else:
            try:
                db.session.add(userObj)
                db.session.commit()
                res["register_status"]=1
                return res 
            except Exception as e:
                res["register_status"] = 0
                res["Error"] = e
                return res  
    else:
        
        res["register_status"] = 0
        res["Error"]="Incorrect request method"
        return res

@app.route("/CheckUsers",methods=["GET"])
def checkUsers():
    if request.method == "GET":
        res={}
        userobjs = models.User.query.all()
        key = request.args["keyword"]
        
        usernames = list(filter(lambda x: key is x.UserName ,userobjs)) 
        if len(usernames)>0:
            res["status"] = 0
            res["Message"] = "Username Already Exists"
            return res
        else:
            res["status"] = 1
            return res
    else:
        res["status"] = 0
        res["Message"] = "Incorrect request method"

@app.route("/FileHandler",methods=["POST"])
def getFile():
 
 if request.method=="POST":
    content = request.files["Resume"]
    content_type = content.content_type 
    if content_type.__contains__("pdf"):
        pdfFileHandler(content.read())
    elif content_type.__contains__("doc") or content_type.__contains__("docx"):
        pass
    elif content_type.__contains__("zip"):
        pass
      
 return "Test"

if  __name__ == "__main__":
    app.run(debug=True)



