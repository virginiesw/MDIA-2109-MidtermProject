var image_stateauth = 0;
var image_statecherry = 1;
var image_statemid = 0;

function imageToggleAuthRight(){
    image_stateauth++;
    if(image_stateauth > 3){
        image_stateauth = 1;
    }
    document.querySelector("#imageauth").src = "img/auth"+image_stateauth+".JPG"
}

function imageToggleAuthLeft(){
    image_stateauth--;
    if(image_stateauth < 1){
        image_stateauth = 3;
    }
    document.querySelector("#imageauth").src = "img/auth"+image_stateauth+".JPG"
}

imageToggleAuthRight();

function imageToggleCherryRight(){
    image_statecherry++;
    if(image_statecherry > 3){
        image_statecherry = 1;
    }
    document.querySelector("#imagecherry").src = "img/cherry"+image_statecherry+".JPG"
}

function imageToggleCherryLeft(){
    image_statecherry--;
    if(image_statecherry < 1){
        image_statecherry = 3;
    }
    document.querySelector("#imagecherry").src = "img/cherry"+image_statecherry+".JPG"
}

imageToggleCherryRight();


function imageToggleMidRight(){
    image_statemid++;
    if(image_statemid > 3){
        image_statemid = 1;
    }
    document.querySelector("#imagemid").src = "img/mid"+image_statemid+".JPG"
}

function imageToggleCherryLeft(){
    image_statemid--;
    if(image_statemid < 1){
        image_statemid = 3;
    }
    document.querySelector("#imagemid").src = "img/mid"+image_statemid+".JPG"
}

imageToggleMidRight();