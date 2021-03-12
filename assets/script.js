/**
 * click start button
 *  !-header element in info box is hidden as well as start button
 *  -!unhide question container element
 *  !-start timer
 * 
 *  -make timer appear on page using html
 * quiz pops up
 * ! -make questions and answers appear
 *  
 * answer questions
 * -when answer is clicked, quiz goes to the next question and point is recorded\
 * -when answer is wrong, timer decreases
 * when quiz finishes, get score
 *  -save score to local storage
 *  -save initials
 */


var startButton = document.getElementById('start-btn');
var quizIntro = document.getElementById('intro');
var questionContainer = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtons = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex


startButton.addEventListener("click", startQuiz)




function startQuiz() {
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    quizIntro.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    timer(90);
    nextQue
};






function nextQue() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}
//Questions
var questions = [
    { 
        question: 'Question 1',
        answers: [
            {text: '4', correct: true },
            {text: '22', correct: false },
            {text: '14', correct: false },
            {text: '7', correct: false },

        ]

    }


]
//timer function
function timer(seconds) {
    var remaningTime = seconds;
    window.setTimeout(function () {
        // console.log(remaningTime);
        if (remaningTime > 0) {
            timer(remaningTime - 1,);
        }
    }, 1000);
}