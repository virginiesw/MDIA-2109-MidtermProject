var question_state = 1;

function StartQuiz() {
    document.querySelector("#fallacypage").style.display = "none";
    document.querySelector("#quizpage1").style.display = "block";
    // document.querySelector("#quizpage_last").style.display = "none";
}

function NextQuestion1() {
    document.querySelector("#quizpage1").style.display = "none";
    document.querySelector("#quizpage2").style.display = "block";
    question_state = 2;
}

function NextQuestion2() {
    document.querySelector("#quizpage2").style.display = "none";
    document.querySelector("#quizpage3").style.display = "block";
    question_state = 3;
}

function NextQuestion3() {
    document.querySelector("#quizpage3").style.display = "none";
    document.querySelector("#quizpage4").style.display = "block";
    question_state = 4;
}

function NextQuestion4() {
    document.querySelector("#quizpage4").style.display = "none";
    document.querySelector("#quizpage5").style.display = "block";
    question_state = 5;
}

function NextQuestion5() {
    document.querySelector("#quizpage5").style.display = "none";
    document.querySelector("#quizpage6").style.display = "block";
    question_state = 6;
}

function QuizResults() {
    document.querySelector("#quizpage6").style.display = "none";
    document.querySelector("#quizpage_last").style.display = "block";
}

//function validateForm() {
    //var input = document.forms["answer"]["answerfield"].value;
    //if (input == "") {
       // alert("You must fill out the answer!");
        //return false;
    //}
//}

// function backToPrev(){
//     if (question_state === 2){
//         StartQuiz();
//     } else if (question_state === 3){
//         document.querySelector("#fallacypage").style.display = "none";
//         NextQuestion1();
//     } else if (question_state === 4){
//         document.querySelector("#fallacypage").style.display = "none";
//         NextQuestion2();
//     } else if (question_state === 5){
//         document.querySelector("#fallacypage").style.display = "none";
//         NextQuestion3();
//     } else if (question_state === 6){
//         document.querySelector("#fallacypage").style.display = "none";
//         NextQuestion2();
//     }
// }