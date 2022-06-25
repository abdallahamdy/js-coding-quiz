var pageContentEl = document.querySelector(".page-content");
var startQuizBtn = document.querySelector("#start-quiz-btn");
var introPageEl = document.querySelector(".main-page");
var secondsCounterEl = document.querySelector(".seconds-counter");

var timeInterval;

var questionCounter = 0;
var countdown = 75;

var mcQuestion = {
    question: "",
    choiceA: "",
    choiceB: "",
    choiceC: "",
    choiceD: "",
    answer: ""
}

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

    if(questionCounter == 5){
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
    firstChoice.className = "btn choice-a";
    firstChoice.textContent = questionObjectsArr[questionCounter].choiceA;

    var secondChoice = document.createElement("button");
    secondChoice.className = "btn choice-b";
    secondChoice.textContent = questionObjectsArr[questionCounter].choiceB;

    var thirdChoice = document.createElement("button");
    thirdChoice.className = "btn choice-c";
    thirdChoice.textContent = questionObjectsArr[questionCounter].choiceC;

    var fourthChoice = document.createElement("button");
    fourthChoice.className = "btn choice-d";
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
    scoreEl.textContent = "Your final score is: ";

    scoreDivEl.appendChild(doneMessageEl);
    scoreDivEl.appendChild(scoreEl);
    pageContentEl.appendChild(scoreDivEl);
}

var clearQuestionPage = function(){
    var questionPage = document.querySelector(".question-page");
    var theQuestion = document.querySelector(".the-question");
    var buttons = document.querySelector(".btn");
    questionPage.remove();
    theQuestion.remove();
    buttons.remove();
    // console.log("Array" + questionObjectsArr[questionCounter].question);


}

var startCounter = function(){
    countdown--;
    if(countdown <= 0 || questionCounter == 5){
        secondsCounterEl.innerHTML = "Time: 0";
        clearQuestionPage();
        displayScorePage();
        clearInterval(timeInterval);
    }else{
        secondsCounterEl.innerHTML = "Time: " + countdown;
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
                countdown = countdown - 25;
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
                countdown = countdown - 25;
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
                countdown = countdown - 25;
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
                countdown = countdown - 25;
                clearQuestionPage();
                displayQuizQuestions();
            }
            break;
    }

}

startQuizBtn.addEventListener("click", startQuizHandler);
pageContentEl.addEventListener("click", answerBtnHandler);