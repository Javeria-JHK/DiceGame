
//const prompt = require('prompt-sync')();
var n = Math.floor((Math.random()*6)+1); //1-6

var randomImage1 =n+".png"; //dice1.png - dice6.png
var randomImagePath1  = "images/"+randomImage1;  //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagePath1);

var m = Math.floor((Math.random()*6)+1);
var randomImagePath2 = "images/"+m+".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagePath2);

if(n>m){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(m>n){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";

}

const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage);