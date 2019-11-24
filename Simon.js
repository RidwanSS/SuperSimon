var md = document.getElementById("mode");
var btn = document.getElementById("btn");
var crx = document.getElementsByClassName("croix")[0];

const topLeft = document.querySelector("#rouge");
const topRight = document.querySelector("#bleu");
const bottomLeft = document.querySelector("#vert");
const bottomRight = document.querySelector("#jaune");
const startButton = document.querySelector("#start");
const onButton = document.querySelector("#on");
const oneshotButton = document.querySelector("#oneshot");
const redScore = document.querySelector("#score");

let oneshot = false;
let on = false;
let win;

onButton.addEventListener('click', (event) => {
    if (onButton.checked == true) {
      on = true;
      redScore.innerHTML = "--";
    } else {
      on = false;
      redScore.innerHTML = "";
      clearColor();
      clearInterval(intervalId);
    }
  });

startButton.addEventListener('click', (event) => {
    if (on == true) {
      play();
    }
});

function play(){
    win = false;

}

btn.onclick = function() {
  md.style.display = "block"; //voir fenetre
}

crx.onclick = function() {
  md.style.display = "none"; //masquer fenetre
}
