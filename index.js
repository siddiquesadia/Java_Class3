// For Increment

let incrementBtn = document.querySelector(`.increment`);
let output= document.querySelector(`.out-value`);

function incNum(){
let value= Number(output.value);
if (value==5){
    alert("Sorry, Out of Stock :(");
    return false;
}
value = value + 1;
output.value = value;
}

incrementBtn.addEventListener(`click`, incNum);

// For Decrement

let decrementBtn = document.querySelector(`.decrement`);

function decNum(){
    let value= Number(output.value);
    if( value==0){
        return false;
    }
    value = value - 1;
    output.value = value;
}

decrementBtn.addEventListener(`click`, decNum);

// For Slider

let slider= document.querySelector(`.slide-input`);
let result= document.querySelector(`.slider .amount h2 span`);

function range(){
   let updateValue = slider.value;
   result.innerHTML = updateValue;

}

slider.addEventListener(`input`, range);

// Hover Image: Mouse Enter

let image = document.querySelector(`.image`);
let frontImage = image.querySelector(`.front-img`);
let backImage = image.querySelector(`.back-img`);

function changeImgFront(){
    frontImage.classList.add(`hover`);
}

image.addEventListener(`mouseenter`, changeImgFront);

// Hover Image: Mouse Leave

function changeImgBack(){
    frontImage.classList.remove(`hover`);
}

image.addEventListener(`mouseleave`, changeImgBack);