const myButton = document.getElementById("myBtn");
const myNumber = document.getElementById("myNum");
let randomNum;


myButton.onclick = function(){
  randomNum = Math.floor((Math.random()*6)+1);
  myNumber.textContent = randomNum;
}