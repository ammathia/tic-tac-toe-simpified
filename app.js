"use strict"


let squareOne = document.querySelector("#one");
let squareTwo = document.querySelector("#two");
let squareThree = document.querySelector("#three");
let squareFour = document.querySelector("#four");
let squareFive = document.querySelector("#five");
let squareSix = document.querySelector("#six");
let squareSeven = document.querySelector("#seven");
let squareEight = document.querySelector("#eight");
let squareNine = document.querySelector("#nine");



squareOne.addEventListener("click", function(){
    squareOne.textContent = "X";
    squareOne.style.fontSize = "110px";
    squareOne.style.textAlign = "center";
    
});


squareOne.addEventListener("dblclick", function() {
    if (squareOne.clicked == true) {

    } else {
        squareOne.textContent = "O";
        squareOne.style.fontSize = "110px";
        squareOne.style.textAlign = "center";

    }

})