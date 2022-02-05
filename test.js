'use strict';
//first the DOM needs to be fully loaded. All the code goes into the window.onload function
window.onload = function () {
    //all variables to get the selectors from the html document
    let startButton = document.querySelector('#startBtn');
    let anzeige_anweisung = document.querySelector('.container_anweisung');
    let person_display = document.querySelector('#person_display');
    let person = document.querySelector('#person');
    let modal = document.querySelector('#modalbox');
    let fragenAusgabe = document.querySelector('#fragen_im_Modal');
    let testfragen = document.createElement('h3');
    let antwortBtn = document.querySelector('#answer_btn');
    let nextButton = document.querySelector('#nextBtn');
    let auswertung_btn = document.querySelector('#auswertung');
    let result_anzeige = document.querySelector('#container_auswertung');
    let antreiberBx = document.querySelector('#antreiber_box');
    let rangeBx = document.querySelector('#range_box');
    let erklaerung = document.querySelector('.erklaerBox');
    let abtn1 = document.querySelector('#btn1');
    let abtn2 = document.querySelector('#btn2');
    let abtn3 = document.querySelector('#btn3');
    let abtn4 = document.querySelector('#btn4');
    let abtn5 = document.querySelector('#btn5');
    let printPage = document.querySelector('#print');
    let countQ = document.querySelector('#countQuestion');
    let counter = 1;

    let shuffeldQuestions, currentQuestionIndex;

    //Array of Objects, where the statment or questions and the number of points as the answer is stored 
    //indi is the identifier of the driver, where the statement/question belongs to
    let fragen = [
        {
            frage: "I always do a job thoroughly",
            antwort: 0,
            indi: 1
        },
        {
            frage: "I feel responsible for the well-being of those who I deal with",
            antwort: 0,
            indi: 4
        },
        {
            frage: "I am always on the go.",
            antwort: 0,
            indi: 2
        },
        {
            frage: "I avoid showing others my weaknesses",
            antwort: 0,
            indi: 5
        },
        {
            frage: "I try not to let the grass grow under my feet",
            antwort: 0,
            indi: 3
        },
        {
            frage: 'I often say: "It is difficult to be absolutely precise"',
            antwort: 0,
            indi: 3
        },
        {
            frage: "I often say more than is necessary",
            antwort: 0,
            indi: 4
        },
        {
            frage: "I have difficulties accepting people that are less conscientious",
            antwort: 0,
            indi: 1
        },
        {
            frage: "I find it hard expressing emotions",
            antwort: 0,
            indi: 5
        },
        {
            frage: 'My mantra is: Hold fast!',
            antwort: 0,
            indi: 3
        },
        {
            frage: "Whenever I give my opinion, I back it up with sound reasoning",
            antwort: 0,
            indi: 1
        },
        {
            frage: 'I aim to fulfill my desires quickly',
            antwort: 0,
            indi: 2
        },
        {
            frage: 'I never deliver a report before I am fully satisfied with it',
            antwort: 0,
            indi: 1
        },
        {
            frage: 'People who procrastinate irritate me.',
            antwort: 0,
            indi: 2
        },
        {
            frage: 'It is important to me to be accepted by others',
            antwort: 0,
            indi: 4
        },
        {
            frage: 'I am a tough nut with a soft centre.',
            antwort: 0,
            indi: 5
        },
        {
            frage: 'I try to determine what expectations others have of me, and act accordingly.',
            antwort: 0,
            indi: 4
        },
        {
            frage: 'I find it difficult to comprehend people who are too laid back.',
            antwort: 0,
            indi: 3
        },
        {
            frage: 'I often interrupt during discussions.',
            antwort: 0,
            indi: 2
        },
        {
            frage: 'I deal with my own issues, whithout asking for help',
            antwort: 0,
            indi: 5
        },
        {
            frage: 'I fulfill tasks in a timely fashion.',
            antwort: 0,
            indi: 2
        },
        {
            frage: 'I tend to keep a distance from people I work with.',
            antwort: 0,
            indi: 5
        },
        {
            frage: 'I should complete many of my tasks to a higher standard.',
            antwort: 0,
            indi: 1
        },
        {
            frage: 'I personally am happy to deal also with less important matters.',
            antwort: 0,
            indi: 1
        },
        {
            frage: 'Success does not just fall into your lap, you have to earn it.',
            antwort: 0,
            indi: 3
        },
        {
            frage: 'I have no patience for careless mistakes.',
            antwort: 0,
            indi: 5
        },
        {
            frage: 'I appreciate quick and concise answers to my questions.',
            antwort: 0,
            indi: 2
        },
        {
            frage: 'External validation of my job is critical to me.',
            antwort: 0,
            indi: 4
        },
        {
            frage: 'I always see a job through to its completion.',
            antwort: 0,
            indi: 3
        },
        {
            frage: "Other people's needs and desires are more important to me than my own.",
            antwort: 0,
            indi: 4
        },
        {
            frage: 'For reasons of self-preservation, I am exacting with others.',
            antwort: 0,
            indi: 5
        },
        {
            frage: 'I often drum impatiently with my fingers on the table top.',
            antwort: 0,
            indi: 2
        },
        {
            frage: 'When describing circumstance I often make use of bullet points (1., 2., 3.)',
            antwort: 0,
            indi: 1
        },
        {
            frage: 'I believe that most things are not always as straight forward as others think.',
            antwort: 0,
            indi: 3
        },
        {
            frage: 'I am uncomfortable criticising other people.',
            antwort: 0,
            indi: 4
        },
        {
            frage: 'During discussions I often nod approvingly.',
            antwort: 0,
            indi: 4
        },
        {
            frage: 'I try hard to reach my goals.',
            antwort: 0,
            indi: 3
        },
        {
            frage: 'My facial expressions reflect my serious nature.',
            antwort: 0,
            indi: 1
        },
        {
            frage: 'I am very nervous.',
            antwort: 0,
            indi: 2
        },
        {
            frage: 'I am not easily thrown off balance.',
            antwort: 0,
            indi: 5
        },
        {
            frage: "My problems are nobody else's business.",
            antwort: 0,
            indi: 5
        },
        {
            frage: 'I often use phrases such as "Come on, get on with it!"',
            antwort: 0,
            indi: 2
        },
        {
            frage: 'I often use terms such as "accurate" "exact" "clear" " logically"  ',
            antwort: 0,
            indi: 1
        },
        {
            frage: 'I often say: " I do not understand..."',
            antwort: 0,
            indi: 3
        },
        {
            frage: 'Instead of just saying "have a go", I prefer to say "Why don\'t you have go?"',
            antwort: 0,
            indi: 4
        },
        {
            frage: 'I am diplomatic',
            antwort: 0,
            indi: 4
        },
        {
            frage: 'I try and exceed the expectations others have of me.',
            antwort: 0,
            indi: 1
        },
        {
            frage: 'I often work on other matters whilst making phone calls.',
            antwort: 0,
            indi: 2
        },
        {
            frage: 'My motto is "Grin and bear it"',
            antwort: 0,
            indi: 5
        },
        {
            frage: "Despite my very best efforts, things don't always turn out as I had hoped.",
            antwort: 0,
            indi: 3
        }
    ];

    //array of objects, where each driver gets its calculated total ammount of points
    let result = [
        { antreiber1: 0 },
        { antreiber2: 0 },
        { antreiber3: 0 },
        { antreiber4: 0 },
        { antreiber5: 0 }
    ];

    //*********************************************************** User input in JavaScript-Version without flask-Framework  ******************************************************************
    /* let input = (user) => {
        let vorname = user.trim();
        let nameUser;
        if(vorname ==""){
            nameUser = "human without name"
        } else {
            nameUser = vorname.charAt(0).toUpperCase() + vorname.slice(1).toLowerCase();
        }
        return nameUser;
    }
    
    let person = input(window.prompt('Please enter your first name: '));
    
    //Vornamen in das Dokument übergeben.
    let willkommen = document.querySelector('#person');
    let anrede = document.createElement('h2');
    anrede.innerHTML = `Welcome, ${person}`;
    willkommen.appendChild(anrede); */

    /************************************************************  main part  *********************************************************************/
    //function to calulate the result
    let antreiber_berechnung = () => {
        for (let i = 0; i < fragen.length; i++) {
            if (fragen[i].indi == 1) {
                result[0].antreiber1 += parseInt(fragen[i].antwort);
            } else if (fragen[i].indi == 2) {
                result[1].antreiber2 += parseInt(fragen[i].antwort);
            } else if (fragen[i].indi == 3) {
                result[2].antreiber3 += parseInt(fragen[i].antwort);
            } else if (fragen[i].indi == 4) {
                result[3].antreiber4 += parseInt(fragen[i].antwort);
            } else {
                result[4].antreiber5 += parseInt(fragen[i].antwort);
            }
        }
    }

    /************************************************************    display the result   ***********************************************************/

    let auswertungTest = () => {
        startButton.style.display = "none";
        //anrede.innerHTML = `${person}, this is your result.`;  - just with html, css and javascript. Without flask
        anzeige_anweisung.style.display = "none";
        person.style.display = "none";
        person_display.classList.remove('hide');
        result_anzeige.classList.remove('hide');
        erklaerung.classList.remove('hide');
        printPage.classList.remove('hide');
        antreiber_berechnung();
        let ant1 = document.createElement('h4');
        let ant2 = document.createElement('h4');
        let ant3 = document.createElement('h4');
        let ant4 = document.createElement('h4');
        let ant5 = document.createElement('h4');
        ant1.innerHTML = `1. Driver:    Be perfect    - ${result[0].antreiber1} points`;
        ant2.innerHTML = `2. Driver:    Hurry up      - ${result[1].antreiber2} points`;
        ant3.innerHTML = `3. Driver:    Try hard      - ${result[2].antreiber3} points`;
        ant4.innerHTML = `4. Driver:    Please others - ${result[3].antreiber4} points`;
        ant5.innerHTML = `5. Driver:    Be strong     - ${result[4].antreiber5} points`;
        antreiberBx.appendChild(ant1);
        antreiberBx.appendChild(ant2);
        antreiberBx.appendChild(ant3);
        antreiberBx.appendChild(ant4);
        antreiberBx.appendChild(ant5);
        if (result[0].antreiber1 > 39) {
            ant1.style.color = "red";
        };
        if (result[1].antreiber2 > 39) {
            ant2.style.color = "red";
        };
        if (result[2].antreiber3 > 39) {
            ant3.style.color = "red";
        };
        if (result[3].antreiber4 > 39) {
            ant4.style.color = "red";
        };
        if (result[4].antreiber5 > 39) {
            ant5.style.color = "red";
        };
    }

    /************************************************************* choose the answer for each statement/question ************************************/

    let selectAnswer = (e) => {
        const selectedBtn = e.target;
        if (selectedBtn.value > 0) {
            fragen[currentQuestionIndex].antwort = selectedBtn.value;
        }
        if (shuffeldQuestions.length <= currentQuestionIndex + 1) {
            nextButton.style.display = "none";
            auswertung_btn.classList.remove('hide');
            console.log(fragen);
        }
    };

    /************************************************************** show question in modal ***************************************************************/

    let showQuestion = (question) => {
        testfragen.innerHTML = question.frage;
        fragenAusgabe.appendChild(testfragen);
        abtn1.addEventListener('click', selectAnswer);
        abtn2.addEventListener('click', selectAnswer);
        abtn3.addEventListener('click', selectAnswer);
        abtn4.addEventListener('click', selectAnswer);
        abtn5.addEventListener('click', selectAnswer);
    }

    // function "next question"
    let nextQuestion = () => {
        //function to shuw currant question, parameter: "currant" question from array: shuffeledQuestion
        showQuestion(shuffeldQuestions[currentQuestionIndex]);
    };

    /**************************************************************** Start des Antreiber - Tests **********************************************************/

    //function to start the driver-test
    let startQuiz = () => {
        //control in console, if started
        //console.log('Quiz Started. Have Fun!');
        //diaplay modal
        modal.style.display = "block";
        //random display of questions 
        shuffeldQuestions = fragen.sort(() => Math.random() - .5);
        //Index for currant question
        currentQuestionIndex = 0;
        //functon to move to next question
        nextQuestion();
    };


    //if clicked, button will start the test
    startButton.addEventListener('click', startQuiz);
    //Button "Next" increments index +1 and calls function for the next question
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        nextQuestion();
        counter++;
        countQ.innerHTML = `Question ${counter} / 50`;
    });
    //Button "result" closes modal and starts function auswertungTest to display the results
    auswertung_btn.addEventListener('click', () => {
        modal.style.display = "none";
        auswertungTest();
    });
    //Button opens the print menue, so that user can either print the results on a printer or save as a pdf file.
    printPage.addEventListener('click', () => {
        window.print();
    });
}