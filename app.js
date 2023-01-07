"use strict"


let squares = document.querySelectorAll('td');

let restart = document.querySelector('#btn');


function clearBoard() { 
    for (let i = 0; squares.length; i++) {
        squares[i].textContent = "";
}
}

restart.addEventListener("click", clearBoard);

function changeSquare() {
    if (this.textContent === "") {
        this.textContent = "X";
    } else if (this.textContent === "X") {
        this.textContent = "O";
    } else {
        this.textContent = "";
    }
}

 for (let i = 0; squares.length; i++) {
    squares[i].addEventListener('click', changeSquare);
 }



/*
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


squareFour.addEventListener("click", function(){
    squareFour.textContent = "X";
    squareFour.style.fontSize = "110px";
    squareFour.style.textAlign = "center";
});


squareFour.addEventListener("dblclick", function() {
    if (!squareFour.clicked == true) {
        squareFour.textContent = "O";
        squareFour.style.fontSize = "110px";
        squareFour.style.textAlign = "center";
    }
});


squareFive.addEventListener("click", function(){
    squareFive.textContent = "X";
    squareFive.style.fontSize = "110px";
    squareFive.style.textAlign = "center";
});


squareFive.addEventListener("dblclick", function() {
    if (!squareFive.clicked == true) {
        squareFive.textContent = "O";
        squareFive.style.fontSize = "110px";
        squareFive.style.textAlign = "center";
    }
});


squareSix.addEventListener("click", function(){
    squareSix.textContent = "X";
    squareSix.style.fontSize = "110px";
    squareSix.style.textAlign = "center";
});


squareSix.addEventListener("dblclick", function() {
    if (!squareSix.clicked == true) {
        squareSix.textContent = "O";
        squareSix.style.fontSize = "110px";
        squareSix.style.textAlign = "center";
    }
});



squareSeven.addEventListener("click", function(){
    squareSeven.textContent = "X";
    squareSeven.style.fontSize = "110px";
    squareSeven.style.textAlign = "center";
});


squareSeven.addEventListener("dblclick", function() {
    if (!squareSeven.clicked == true) {
        squareSeven.textContent = "O";
        squareSeven.style.fontSize = "110px";
        squareSeven.style.textAlign = "center";
    }
});



squareEight.addEventListener("click", function(){
    squareEight.textContent = "X";
    squareEight.style.fontSize = "110px";
    squareEight.style.textAlign = "center";
});


squareEight.addEventListener("dblclick", function() {
    if (!squareEight.clicked == true) {
        squareEight.textContent = "O";
        squareEight.style.fontSize = "110px";
        squareEight.style.textAlign = "center";
    }
});


squareNine.addEventListener("click", function(){
    squareNine.textContent = "X";
    squareNine.style.fontSize = "110px";
    squareNine.style.textAlign = "center";
});


squareNine.addEventListener("dblclick", function() {
    if (!squareNine.clicked == true) {
        squareNine.textContent = "O";
        squareNine.style.fontSize = "110px";
        squareNine.style.textAlign = "center";
    }
});

*/