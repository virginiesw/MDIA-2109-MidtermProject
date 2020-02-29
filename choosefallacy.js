var authread = false;
var cherryread = false;
var midread = false;

function chooseAuth(){
    document.querySelector("#fallacypage").style.display = "none";
    document.querySelector("#authpage").style.display = "block";
    
    authread = true;
    console.log(authread);
}

function chooseCherry(){
    document.querySelector("#fallacypage").style.display = "none";
    document.querySelector("#cherrypage").style.display = "block";

    cherryread = true;
    console.log(cherryread);
}

function chooseMiddle(){
    document.querySelector("#fallacypage").style.display = "none";
    document.querySelector("#middlegroundpage").style.display = "block";

    midread = true;
    console.log(midread);
}

function exitQuiz(){
    document.querySelector("#appearonread").style.display = "none";
}
// function exitQuiz {
//     document.querySelector("#appearonread").style.display = "none";
// }

// if (midread === true){
//     document.querySelector("#appearonread").style.display = "block";
// }