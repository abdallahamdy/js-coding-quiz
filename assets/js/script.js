var pageContentEl = document.querySelector(".page-content");
var quizBtn = document.querySelector("#start-quiz-btn");
var introPageEl = document.querySelector(".main-page");

var displayQuizQuestions = function(){

    var questionPageEl = document.createElement("div");
    questionPageEl.className = "question-page";
    
    var questionEl = document.createElement("h1");
    questionEl.className = "the-question";
    questionEl.textContent = "7ayak allah a5ooy"

    questionPageEl.appendChild(questionEl);

    pageContentEl.appendChild(questionPageEl);

}

var startQuizHandler = function(){
    console.log("HELLO");
    introPageEl.style.display = 'none';
    displayQuizQuestions();
    // introPageEl.style.display = 'flex';
}

quizBtn.addEventListener("click", startQuizHandler);