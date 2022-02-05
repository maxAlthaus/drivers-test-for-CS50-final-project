from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

app = Flask(__name__)  #dieses Objekt(app) wird zur Erkennung genutzt
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db' #URI = Uniform Recourse Identifier zum SQL file
app.config['SECRET_KEY']='e9c942028697204fc4d8641a'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db = SQLAlchemy(app)
bcrypt = Bcrypt(app) # install flask_bcrypt using pip
login_manager = LoginManager(app) # install flask_login using pip
login_manager.login_view = 'login_page'
login_manager.login_message_category ="info"


from project import application