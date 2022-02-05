# PSYCHOLOGICAL DRIVER TEST
#### Video Demo: <URL https://youtu.be/nTOaCxSlngA>
#### Description
```
#### Every human developes behavior upon his or her **drivers**.
#### These five drivers are built since birth and influenced by parents, teachers and others.
#### Additionally every human is able to change dirvers as soon as he or she knows about them
#### and what to do. As part of the transaction analysis a psychological driver test is essential
#### as one of the first steps, if you want to take control over your life, communicate and react
#### target focused and planned instead of instinctively most of the time.
#### This web application shows all five drivers with each strength, based on the answers on all
#### statements in the test.
#### This digitalized test based on the work of Taibi Kahler about drivers in 1975 and the questionnaire
#### that was written by Kahler and Hedges. By the time the questions might have changed a little and most
#### specialists using it, will hand over some paper form to fill in. Because of the pandemic and the 
#### possibility, still to keep on working with clients, who want to do this test, i stared to code
#### this version. Luckily i also tested it in my daily work(I am Business Trainer and Business Coach).
#### It is recommended to do a test like this, concerninc drivers befor you do a personality test.
#### You should also concider to learn some basics about transaction analysis, just to understand the way
#### humans behave and why they do what. If you would like to know more, let me know.
```
#### After rgistration login and follow the instructions. Then press start and read every statement carefully.
#### Chose how much each statement fits you ("Looks like, I could have said this" or "I would never say that")
#### There for you have 5 possibilities to chose from.
#### At the end of the test you will see your result, that you also can print out or save as a PDF file.
#### Feel free to contact me at any time after the test to talk about your results.
#### Although it is coded for all screen sizes, the best UX is on laptop and desk top screens.
```
#### **description of all files**
```
#### **run.py:**
#### instead of typing all the code in the console to get the app running
#### simply type: python run.py
#### run.py does the rest and in developer mode sets the Debug on true
```
#### **__init__.py:**
#### initializes the app, database and the login manager for this application
#### usually this code is also placed in application.py
#### but like this it looks better, cleaner and needs less time to load
```
#### **application.py:**
#### The core python file of this webapp.
#### in this file you find routs to index.html, the login and logout page
#### as well as to the registration page.
#### Here you find the control mechanisms that will send you to registration
#### if you don't have an account
#### in order to do that job, the import of some forms and a db is neccesary
#### to check, if an account exist, a password is correct and to tell the user if not.
```
#### **forms.py:**
#### This file includes a registration form and a login form.
#### Registration form takes all information from the user to hand it over to the database in order to create a new account
#### Before that it checks if the username or the email address in this form allready exists in the database.
#### In that case, the programm will let the user know.
#### Login form takes Username and password as input an validates if both exists and is correct
```
#### **models.py:**
#### In this file you find the user-class containing id, user name, email address and password
#### for the password setting and check functions are also included. 
#### Everytime a new user creates an account, an instance of this class will be saved to the database
#### including the information from the user
```
#### **user.db:**
#### The properties of the user-class are in stored this database.
#### Currantly it hast the table containing ID, user name, email address and passowrd,
#### but in the future it will be extended by the table "results", where the results of the
#### test will be stored, in order to check from time to time, what changed. 
#### Like this Coaches, Trainer, Psychologists and other persons working with this app, also the user him or her self
#### will be able to gain more controle over their strengths and plan how to use  and change them.
```
#### **layout.html:**
#### This file is responsable for the general structure of all html files in this app.
#### Using this file reduces redundancies in coding.
#### It includes the connection to the css file and javascript file.
#### layout.html does not style the other pages, like css does, but provides the frame for the other pages.
```
#### **index.html:**
#### Our main page of this web application. On this file you find the instructions for the driver test
#### It includes also the modal, that will open, when you press Start.
#### Within the modal you chose your answers on the statements, that will be shown to you, one by one.
#### After the last statement and choice you will find the "result" button to click on and the modal will disapear.
#### In the index.html the result of your test will be shown now instead of the instructions. 
#### Also the "Welcome, (name)" changes to "(name), here is your result.", in order to keep it as interactive as possible.
´´´
#### **login.html**
#### As the name shows, this is the page, where you enter your user username and email-address in order to get access to the test.
#### This page is shown before the index.html as a gate keeper. You don't have an account yet? No problem. By clicking on the
#### registration - button you will be redirected to the register.html
´´´
#### **register.html**
#### Just in case you remember, that you allready have an account, click on the Login-button and you will be redirected to login.html
#### Otherwise this page is made to create a new account taking user name, email address, password and "confirm password" as input.
#### If this username and/or email adress allready exists, the user will be informed.
#### After successful registration the user will be redirected to index.html
```
#### **quiz.css**
#### Within this file you will find all the styling from background of each html-file to the buttons, the modal and all the
#### funny stuff on each page, to make it user friendly and nice
```
#### **test.js**
#### This is the heart of the whole test. Written as a quiz (that is why i named the css file quiz.css) it shows one statement after the other
#### and let the user chose, which answer fits to the user most. This driver test is a digital version of the driver test invented by Taibi Kahler,
#### wich is used world wide by Trainers, Coaches, Couselors, Psychologists. Instead of having a static list of statements to chose from this digital 
#### version shows all tatements randomly. The user is able to do the test several times and can not get used to which statement belongs to which
#### driver so easily. All statments are stored in an array, each as an object including the key-value properties "question", "answer"(storing the
#### chosen points as value) and "indi" (storing the number of driver as a value). Like this it is easy to identify the drivers and to sum up how many
#### points in total each driver achieved.
#### This file also changes the content of parts of the index.html file, like the statements within the modal, shows butten, if needen
#### the results and the print button. If you click this button, your print-menue will open so that you have the possibilites either to print
#### your results on a printer or to save it as a pdf.
