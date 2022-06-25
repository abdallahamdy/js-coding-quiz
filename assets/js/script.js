var pageContentEl = document.querySelector(".page-content");
var startQuizBtn = document.querySelector("#start-quiz-btn");
var introPageEl = document.querySelector(".main-page");
var secondsCounterEl = document.querySelector(".seconds-counter");
var bodyEl = document.querySelector(".the-body");

var timeInterval;
var finalScore = 0;

var questionCounter = 0;
var countdown = 75;

var highScores = [];

var quizQuestions = [
    "Commonly used data types do NOT include:",
    "The condition in an if / else statement is enclosed with _______.",
    "Arrays in JavaScript can be used to store ______.",
    "String values must be enclosed within ______ when being assigned to variables.",
    "A useful tool used during development and debugging for printing content to the debugger is:"
];

var quizChoices = [
    "1. Strings",
    "2. Booleans",
    "3. Alerts",
    "4. Numbers",
    "3",
    "1. Quotes",
    "2. Curly Brackets",
    "3. Paranthesis",
    "4. Square Brackets",
    "3",
    "1. Numbers and Strings",
    "2. Other Arrays",
    "3. Booleans",
    "4. All of the above",
    "4",
    "1. Commas",
    "2. Curly Brackets",
    "3. Quotes",
    "4. Parenthesis",
    "2",
    "1. JavaScript",
    "2. Terminal/Bash",
    "3. console.log",
    "4. For Loops",
    "3"
]

var questionObjectsArr = [];

var populateQuestionsArray = function(){
    for(var i = 0; i < quizQuestions.length; i++){
        var tempObj = new Object();
        tempObj.question = quizQuestions[i];

        var choicesIndexes = i*5;
        tempObj.choiceA = quizChoices[choicesIndexes];
        tempObj.choiceB = quizChoices[choicesIndexes+1];
        tempObj.choiceC = quizChoices[choicesIndexes+2];
        tempObj.choiceD = quizChoices[choicesIndexes+3];
        tempObj.answer = quizChoices[choicesIndexes+4];

        questionObjectsArr.push(tempObj);
        
    }
}

var displayQuizQuestions = function(){

    if(questionCounter == 5 || countdown == 0){
        console.log("Game ended!");
        return;
    }

    var questionPageEl = document.createElement("div");
    questionPageEl.className = "question-page";
    
    // create the question element and add the question from the array of questions
    var questionEl = document.createElement("h1");
    questionEl.className = "the-question";
    questionEl.textContent = questionObjectsArr[questionCounter].question;

    var firstChoice = document.createElement("button");
    firstChoice.className = "btn choice-a choice";
    firstChoice.textContent = questionObjectsArr[questionCounter].choiceA;

    var secondChoice = document.createElement("button");
    secondChoice.className = "btn choice-b choice";
    secondChoice.textContent = questionObjectsArr[questionCounter].choiceB;

    var thirdChoice = document.createElement("button");
    thirdChoice.className = "btn choice-c choice";
    thirdChoice.textContent = questionObjectsArr[questionCounter].choiceC;

    var fourthChoice = document.createElement("button");
    fourthChoice.className = "btn choice-d choice";
    fourthChoice.textContent = questionObjectsArr[questionCounter].choiceD;

    questionPageEl.appendChild(questionEl);
    questionPageEl.appendChild(firstChoice);
    questionPageEl.appendChild(secondChoice);
    questionPageEl.appendChild(thirdChoice);
    questionPageEl.appendChild(fourthChoice);

    pageContentEl.appendChild(questionPageEl);

}

var displayScorePage = function(){

    var scoreDivEl = document.createElement("div");
    scoreDivEl.className = 'score-page';

    var doneMessageEl = document.createElement("h1");
    doneMessageEl.className = 'done-msg';
    doneMessageEl.textContent = "All done!";

    var scoreEl = document.createElement("p");
    scoreEl.textContent = "Your final score is: " + finalScore;

    var labelEl = document.createElement("label");
    labelEl.textContent = "Enter your initials: ";

    var inputEl = document.createElement("input");
    inputEl.type = "text";

    var buttonEl = document.createElement("button");
    buttonEl.className = "submitBtn";
    buttonEl.type = "submit";
    buttonEl.textContent = "Submit";

    scoreDivEl.appendChild(doneMessageEl);
    scoreDivEl.appendChild(scoreEl);
    scoreDivEl.appendChild(labelEl);
    scoreDivEl.appendChild(inputEl);
    scoreDivEl.appendChild(buttonEl);
    pageContentEl.appendChild(scoreDivEl);
}

var clearQuestionPage = function(){
    var questionPage = document.querySelector(".question-page");
    var theQuestion = document.querySelector(".the-question");
    var buttons = document.querySelector(".choice");
    questionPage.remove();
    theQuestion.remove();
    buttons.remove();
}

var startCounter = function(){
    countdown--;
    if(countdown > 0){
        secondsCounterEl.innerHTML = "Time: " + countdown;
    }
    if(questionCounter == 5){
        clearInterval(timeInterval);
        finalScore = countdown;
        displayScorePage();
    }
    if(countdown <= 0){
        clearInterval(timeInterval);
        finalScore = 0;
        secondsCounterEl.innerHTML = "Time: 0";
        clearQuestionPage();
        displayScorePage();
    }
}


var startQuizHandler = function(){
    introPageEl.style.display = 'none';
    populateQuestionsArray();
    displayQuizQuestions();
    timeInterval = setInterval(startCounter, 1000);
    console.log();
}

var answerBtnHandler = function(event){

    if(!event.target.matches(".choice")){
        return;
    }

    var element = event.target;
    var choice = element.classList[1];
    var correctAnswer = questionObjectsArr[questionCounter].answer;
    
    if(correctAnswer === undefined){
        return;
    }

    switch(choice){
        case "choice-a":
            if(correctAnswer == "1"){
                console.log("Correct answer");
            }else{
                console.log("Wrong answer.");
                questionCounter++;
                countdown = countdown - 10;
                clearQuestionPage();
                displayQuizQuestions();
                // if wrong, decrement timer and append a wrong answer element to next page.
            }
            break;
        case "choice-b":
            if(correctAnswer == "2"){
                console.log("This is correct!");
                questionCounter++;
                clearQuestionPage();
                displayQuizQuestions();
            }else{
                console.log("Wrong answer.");
                questionCounter++;
                countdown = countdown - 10;
                clearQuestionPage();
                displayQuizQuestions();
            }
            break;
        case "choice-c":
            if(correctAnswer == "3"){
                console.log("This is correct!");
                questionCounter++;
                clearQuestionPage();
                displayQuizQuestions();
            }else{
                console.log("Wrong answer.");
                questionCounter++;
                countdown = countdown - 10;
                clearQuestionPage();
                displayQuizQuestions();
            }
            break;
        case "choice-d":
            if(correctAnswer == "4"){
                console.log("This is correct!");
                questionCounter++;
                clearQuestionPage();
                displayQuizQuestions();
            }else{
                console.log("Wrong answer.");
                questionCounter++;
                countdown = countdown - 10;
                clearQuestionPage();
                displayQuizQuestions();
            }
            break;
    }

}

var displayHighScores = function (){

    var scoresDivEl = document.createElement("div");
    scoresDivEl.className = 'scores-div';

    var titleEl = document.createElement("h1");
    titleEl.textContent = "High Scores:";

    var scoresUlEl = document.createElement("ul");
    scoresUlEl.className = "score-list";

    for(var i=0; i < highScores.length; i++){
        var scoresListEl = document.createElement("li");
        scoresListEl.textContent = highScores[i].name + " " + highScores[i].score;
        scoresUlEl.appendChild(scoresListEl);
    }

    var goBackBtn = document.createElement("button");
    goBackBtn.classList.add('btn', 'go-back-btn');
    goBackBtn.textContent = "Main Page";

    var clearScoresBtn = document.createElement("button");
    clearScoresBtn.classList.add('btn', 'clear-scores-btn');
    clearScoresBtn.textContent = "Clear Scores";

    scoresDivEl.appendChild(titleEl);
    scoresDivEl.appendChild(scoresUlEl);
    scoresDivEl.appendChild(goBackBtn);
    scoresDivEl.appendChild(clearScoresBtn);
    pageContentEl.appendChild(scoresDivEl);
    

}

var saveScores = function(){
    localStorage.setItem("scores", JSON.stringify(highScores));
}

var loadScores = function(){
    var savedScores = localStorage.getItem("scores");

    if(!savedScores){
        return false;
    }

    highScores = JSON.parse(savedScores);

}

var submitScore = function(event){
    var targetEl = event.target;
    var scorePageEl = document.querySelector(".score-page");
    if(targetEl.matches(".submitBtn")){
        var nameInput = document.querySelector("input").value;
        var player = {
            name: nameInput,
            score: finalScore
        }
        highScores.push(player);
        saveScores();
        console.log(nameInput);
        scorePageEl.remove();
        displayHighScores();
    }
}

var clearScores = function(event){
    var element = event.target;
    if(element.matches(".clear-scores-btn")){
        console.log("clearing now");
        localStorage.clear();
        var scores = document.querySelector(".score-list");
        if(scores){
            scores.remove();
        }
    }
}

var backToMain = function(event){
    var element = event.target;
    if(element.matches('.go-back-btn')){
        console.log("MAINMENU");
        var scorePageEl = document.querySelector(".scores-div");
        scorePageEl.remove();
        resetEverything();
    }
}

var resetEverything = function(){
    countdown = 75;
    questionCounter = 0;
    introPageEl.style.display = 'flex';
    secondsCounterEl.innerHTML = "Time: 0";
}

startQuizBtn.addEventListener("click", startQuizHandler);
pageContentEl.addEventListener("click", answerBtnHandler);
pageContentEl.addEventListener("click", submitScore);
pageContentEl.addEventListener("click", clearScores);
pageContentEl.addEventListener("click", backToMain);

loadScores();