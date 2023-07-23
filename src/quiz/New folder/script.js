const info_box = document.querySelector(".infobox");
const start_btn = info_box.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".quizbox");
const result_box = document.querySelector(".resultbox")
const option_list = quiz_box.querySelector("section .answerlist")
const next_btn = quiz_box.querySelector("footer .next");
const question_counter = quiz_box.querySelector("footer .questionNo");
const quiz_question_count = quiz_box.querySelector("footer .questionNo");
const quit_btn = result_box.querySelector(".buttons .quit");
const time_Text = quiz_box.querySelector("header .timer .timetext");
const time_Count = quiz_box.querySelector("header .timer .timerTime");
const next_btn_text = quiz_box.querySelector("footer .next span");

start_btn.onclick = function () {
    quiz_box.classList.add("activeQuiz"); // show quiz box
    info_box.classList.add("inactiveInfo"); // hide info box
    showQuetions(0);
    queCounter(1);
    startTimer(60);
}

let question_count = 0;
let question_number = 1;
let user_score = 0;
let no_wrong = 0;
let counter;
let timeTaken;
let unAnswer;

next_btn.onclick = function () {
    if (question_count < questions.length - 1) {
        question_count++;
        question_number++;
        showQuetions(question_count);
        queCounter(question_number);
        next_btn.classList.remove("show");
    }
    else {
        showResult();
    }
}
// function to show question
function showQuetions(index) {
    const question_text = quiz_box.querySelector("section .question");

    let que_tag = '<span>' + questions[index].numb + "." + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    question_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option")

    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// function to display question number
function queCounter(index) {
    let totalQuestionCountTag = '<span>' + index + ' of ' + questions.length + ' Questions </span>';
    quiz_question_count.innerHTML = totalQuestionCountTag;
}
// function to check wether the selected answer is correct
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[question_count].answer;
    const allOptions = option_list.children.length;

    if (userAnswer == correctAnswer) {
        user_score += 1;
        answer.classList.add("correct");
    }
    else {
        no_wrong += 1;
        answer.classList.add("incorrect");
        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAnswer) {
                option_list.children[i].setAttribute("class", "option correct");
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}
// function to show result
function showResult() {
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".scoreText");
    let resultTag = '<div class="result_item"><span>Number of questions: ' + questions.length + '</span></div>'
        + '<div class="result_item"><span>User Score: ' + user_score + '</span></div>'
        + '<div class="result_item"><span>Wrong Answers: ' + no_wrong + '</span></div>'
        + '<div class="result_item"><span>Time Taken: ' + timeTaken + ' seconds</span></div>';
    scoreText.innerHTML = resultTag;
}

quit_btn.onclick = function () {
    window.location.reload();
}

// strat the timer
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        time_Count.textContent = time;
        time--;
        timeTaken = (60 - time)-1;
        if (time < 9) {
            let addZero = time_Count.textContent;
            time_Count.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            time_Text.textContent = "Time Off";
            let correctAnswer = questions[question_count].answer;
            const allOptions = option_list.children.length;
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correctAnswer) {
                    option_list.children[i].setAttribute("class", "option correct");
                }
            }
            next_btn_text.textContent = "Continue";
            next_btn.classList.add("show");
            next_btn.onclick = function () {
                showResult();
            }
        }
    }
}
