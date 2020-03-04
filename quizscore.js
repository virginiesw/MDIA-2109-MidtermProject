var total = 0;

function rightAnswer() {
    total += 1;
    console.log(total);
}

function getTotal() {
    // if(total === 1){
    //     document.getElementById("score").innerHTML = "your score is: 1/6"
    // } else if (total === 2) {
    //     document.getElementById("score").innerHTML = "your score is: 2/6"
    // } else if (total === 3) {
    //     document.getElementById("score").innerHTML = "your score is: 3/6"
    // } else if (total === 4) {
    //     document.getElementById("score").innerHTML = "your score is: 4/6"
    // } else if (total === 5) {
    //     document.getElementById("score").innerHTML = "your score is: 5/6"
    // } else if (total === 6) {
    //     document.getElementById("score").innerHTML = "your score is: 6/6"
    // } else {
    //     document.getElementById("score").innerHTML = "maybe you should study some more!"
    // }

    document.getElementById("score").innerHTML = "your score is: " +total + "/6";
}

function resetTotal() {
    total = 0;
}
