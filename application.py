from project import app  # Für alle routs benötigt man aus den anderen templates Inhalte und allgemein die app
from flask import render_template, redirect, url_for, flash, request  #redirect wird den user auf eine andere Seite leiten.
from project.models import User
from project.forms import RegisterForm, LoginForm
from flask_login import login_user, logout_user, login_required, current_user
from project import db


@app.route('/') # hier kommt man auf der index.html raus
@app.route('/index') # optional, damit man auch mit dem Wort Index auf die selbe Seite zurück kommt
@login_required
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login_page(): # Login Seite mit Weiterleitung auf die Marktplatzseite oder Registrierungsseite
    form = LoginForm()
    if form.validate_on_submit():
        attempted_user = User.query.filter_by(username=form.username.data).first()
        if attempted_user and attempted_user.check_password_correction(
            attempted_password=form.password.data):
                login_user(attempted_user)
                return redirect(url_for('index'))
        else:
            flash('Access denied! Username or password incorrect.')

    return render_template('login.html', form=form)

@app.route('/register', methods=['GET', 'POST'])
def register_page(): # Die Registrierungsseite mit User anlegen und weiterleiten auf die Marktseite oder Login-Seite
    form = RegisterForm()
    if form.validate_on_submit(): # Variable anlegen, Inhalte aus der form holen und 
        user_to_create = User(username=form.username.data, 
                              email_address=form.email_address.data, 
                              password=form.password1.data)
        db.session.add(user_to_create) #...an die Datenbank übergeben
        db.session.commit()
        login_user(user_to_create)
        flash(f'Account created successfully. Welcome {user_to_create.username}')
        return redirect(url_for('index'))
        
    if form.errors != {}: #if there are errors from the validations
        for err_msg in form.errors.values():
            flash(f'There was an Error with creating a user: {err_msg}')
    return render_template('register.html', form=form)


@app.route('/logout')
def logout_page():
    logout_user()
    flash('You have been logged out. Have a great day')
    return redirect(url_for('login_page'))