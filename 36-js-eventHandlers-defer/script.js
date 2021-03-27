// opdracht 1: Een click event vastmaken aan een button
const buttonAlertMe = document.getElementById('mybutton');

buttonAlertMe.addEventListener('click', function () { alert("button clicked") });


// opdracht 2 / 3: 
const buttonChangeBackground = document.getElementById('mybutton2');

const background = document.querySelector('body');
const toggleBackgroundColor = () => {
    background.classList.toggle("red-background");
}
buttonChangeBackground.addEventListener('click', toggleBackgroundColor);