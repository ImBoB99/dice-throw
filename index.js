var randomNumberOne = Math.floor((Math.random()*6) + 1);
var randomNumberTwo = Math.floor((Math.random()*6) + 1);
var winner;
if (randomNumberOne > randomNumberTwo) {
    document.getElementsByTagName("h1")[0].innerText = "Player 1 Wins!🚩"
} else if (randomNumberTwo > randomNumberOne) {
    document.getElementsByTagName("h1")[0].innerText = "Player 2 Wins!🚩"
} else {
    document.getElementsByTagName("h1")[0].innerText = "It was a tie!"
}

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumberOne + ".png"); // can set the src change like this
document.querySelector(".img2").src = "images/dice" + randomNumberTwo + ".png"; // or like this