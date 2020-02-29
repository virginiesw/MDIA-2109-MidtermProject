var image_state = 0;

function imageToggleAuthRight(){
    image_state++;
    if(image_state > 3){
        image_state = 1;
    }
    document.querySelector("#image").src = "img/auth"+image_state+".JPG"
}

function imageToggleAuthLeft(){
    image_state--;
    if(image_state < 1){
        image_state = 3;
    }
    document.querySelector("#image").src = "img/auth"+image_state+".JPG"
}

imageToggleAuthRight();