let colors = [
    'rgb(225, 0, 0)',
    'rgb(155, 255, 0)',
    'rgb(10, 125, 56)',
    'rgb(100, 0, 255)',
    'rgb(250, 59, 200)',
    'rgb(0, 150, 150)'
];

let square = document.querySelectorAll(".square");

// picked initial color for displaying in the heading
//let pickedColor = colors[3];
// picked randomly color
let pickedColor = pickColor();

let displayColor = document.getElementById("displayColor");

displayColor.innerHTML = pickedColor.toUpperCase();

// viewing correct or not
let displayMessage = document.querySelector(".message");

// change to the heading color
let headColor = document.querySelector("h1");

for(let i = 0; i < square.length; i++){
    // add initial color to square
    square[i].style.backgroundColor = colors[i];

    // add click listener to square
    square[i].addEventListener("click", function(){
        // grab the color of clicked square
        let clickedColor = this.style.backgroundColor;
        // compare the color between click square and pickedColor
        if(clickedColor === pickedColor){
            // if matches, changes background color to all square
            for(let i = 0; i < square.length; i++){
                square[i].style.backgroundColor = clickedColor;
            }
            // using for()  or use a function
            // changedSquareColor(clickedColor);

            displayMessage.textContent = 'Correct !!!';
            headColor.style.backgroundColor = pickedColor;
        }
        else{
            // color of the body, from css
            this.style.backgroundColor = "#3a3535";
            displayMessage.textContent = 'Try Again !!!';
        }        
    });
}

/*
// using for()  or use a function

function changedSquareColor(color){
    for(let i = 0; i < square.length; i++){
        square[i].style.backgroundColor = color;
    }
}
*/

// function to picked a color randomly
function pickColor(){
    let pickerNumber = Math.floor(Math.random()*colors.length);
    return colors[pickerNumber];
}
