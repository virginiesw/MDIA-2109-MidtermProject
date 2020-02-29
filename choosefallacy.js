var authread = false;
var cherryread = false;
var midread = false;

function chooseAuth(){
    document.querySelector("#fallacypage").style.display = "none";
    document.querySelector("#authpage").style.display = "block";
    
    authread = true;
}

function chooseCherry(){
    document.querySelector("#fallacypage").style.display = "none";
    document.querySelector("#cherrypage").style.display = "block";

    cherryread = true;
}

function chooseMiddle(){
    document.querySelector("#fallacypage").style.display = "none";
    document.querySelector("#middlegroundpage").style.display = "block";

    midread = true;
    console.log(midread);
}

if (midread === true && authread === true && cherryread === true){
    document.querySelector("fallacyreadpage").style.display = "block";
    document.querySelector("fallacypage").style.display = "none";
}