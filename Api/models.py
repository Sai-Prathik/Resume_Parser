from email.policy import default
import App
db = App.db

class User(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    FirstName = db.Column(db.String(100),nullable = False)
    LastName = db.Column(db.String(100),nullable = False)
    UserName = db.Column(db.String(100),nullable = False)
    Password = db.Column(db.String(100),nullable = False)

class Applicant(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(100),nullable=False)
    email = db.Column(db.String(100),nullable=False)
    experience = db.Column(db.Integer,nullable=False,default=0)
    collegeName = db.Column(db.String(100),nullable=False)
    

    
    
    
    


