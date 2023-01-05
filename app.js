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
    if (!squareOne.clicked == true) {
        squareOne.textContent = "O";
        squareOne.style.fontSize = "110px";
        squareOne.style.textAlign = "center";
    }
});


squareTwo.addEventListener("click", function(){
    squareTwo.textContent = "X";
    squareTwo.style.fontSize = "110px";
    squareTwo.style.textAlign = "center";
});


squareTwo.addEventListener("dblclick", function() {
    if (!squareTwo.clicked == true) {
        squareTwo.textContent = "O";
        squareTwo.style.fontSize = "110px";
        squareTwo.style.textAlign = "center";
    }
});



squareThree.addEventListener("click", function(){
    squareThree.textContent = "X";
    squareThree.style.fontSize = "110px";
    squareThree.style.textAlign = "center";
});


squareThree.addEventListener("dblclick", function() {
    if (!squareThree.clicked == true) {
        squareThree.textContent = "O";
        squareThree.style.fontSize = "110px";
        squareThree.style.textAlign = "center";
    }
});