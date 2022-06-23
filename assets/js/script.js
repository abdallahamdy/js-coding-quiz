var quizBtn = document.querySelector("#start-quiz-btn");
var introPageEl = document.querySelector(".intro-page");

var displayQuiz = function(){

    

}

var startQuizHandler = function(){
    console.log("HELLO");
    introPageEl.remove();
    displayQuiz();
}

quizBtn.addEventListener("click", startQuizHandler);