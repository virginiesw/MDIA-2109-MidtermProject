var question_state = 1;
var answer1 = false;
var answer2 = false;
var answwer3 = false;
var answer4 = false;
var answer5 = false;
var answer6 = false;

function StartQuiz() {
    document.querySelector("#fallacypage").style.display = "none";
    document.querySelector("#quizpage1").style.display = "block";
    // document.querySelector("#quizpage_last").style.display = "none";
}

function rightAnswer1() {
    answer1 = true;
    console.log(answer1);
}

function rightAnswer2() {
    answer2 = true;
    console.log(answer2);
}

function rightAnswer3() {
    answer3 = true;
    console.log(answer3);
}

function rightAnswer4() {
    answer4 = true;
    console.log(answer4);
}

function rightAnswer5() {
    answer5 = true;
    console.log(answer5);
}

function rightAnswer6() {
    answer6 = true;
    console.log(answer6);
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

// function myFunction() {
//     var inpObj = document.getElementById("firstinput");
//     if (!inpObj.checkValidity()) {
//       document.getElementById("quizpage2").innerHTML = inpObj.validationMessage;
//     }
//   }

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