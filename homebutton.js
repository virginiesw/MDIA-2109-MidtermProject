function backToHome() {
    document.querySelector("#middlegroundpage").style.display = "none";
    document.querySelector("#cherrypage").style.display = "none";
    document.querySelector("#authpage").style.display = "none";
    document.querySelector("#fallacypage").style.display = "block";

    if (midread === true && cherryread === true && authread === true){
        document.querySelector("#appearonread").style.display = "block";
    }
}