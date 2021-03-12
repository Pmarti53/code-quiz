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
var quizIntro = document.getElementById('quiz-intro');
var questionContainer = document.getElementById('question-container');

startButton.addEventListener("click", startQuiz)




function startQuiz() {
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    timer(90);

};

function timer(seconds) {
    var remaningTime = seconds;
    window.setTimeout(function () {
        console.log(remaningTime);
        if (remaningTime > 0) {
            timer(remaningTime - 1,);
        }
    }, 1000);
}




function nextQue() {

}

function selectAnswer() {

}
// //Questions
// let questions = [
//     {
//         number: 1,
//         question: "Question 1",
//         answer: "answer 3",
//         options: [
//             "answer 1",
//             "answer 2",
//             "answer 3",
//             "answer 4"
//         ]
//     },

//     {
//         number: 2,
//         question: "Question 2",
//         answer: "answer 1",
//         options: [
//             "answer 1",
//             "answer 2",
//             "answer 3",
//             "answer 4"
//         ]
//     },

//     {
//         number: 3,
//         question: "Question 3",
//         answer: "answer 3",
//         options: [
//             "answer 1",
//             "answer 2",
//             "answer 3",
//             "answer 4"
//         ]
//     },

//     {
//         number: 4,
//         question: "Question 4",
//         answer: "answer 2",
//         options: [
//             "answer 1",
//             "answer 2",
//             "answer 3",
//             "answer 4"
//         ]
//     },

//     {
//         number: 5,
//         question: "Question 5",
//         answer: "answer 4",
//         options: [
//             "answer 1",
//             "answer 2",
//             "answer 3",
//             "answer 4"
//         ]
//     },

//     {
//         number: 6,
//         question: "Question 6",
//         answer: "answer 1",
//         options: [
//             "answer 1",
//             "answer 2",
//             "answer 3",
//             "answer 4"
//         ]
//     },

//     {
//         number: 7,
//         question: "Question 7",
//         answer: "answer 2",
//         options: [
//             "answer 1",
//             "answer 2",
//             "answer 3",
//             "answer 4"
//         ]
//     },

//     {
//         number: 8,
//         question: "Question 1",
//         answer: "answer 4",
//         options: [
//             "answer 1",
//             "answer 2",
//             "answer 3",
//             "answer 4"
//         ]
//     },

// ]