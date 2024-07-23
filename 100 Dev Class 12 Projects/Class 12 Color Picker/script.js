document.querySelector('#purple').onclick = changePurple;
document.querySelector('#green').onclick = changeGreen;
document.querySelector('#blue').onclick = changeBlue;
document.querySelector('#yellow').onclick = changeYellow;
console.log(document.querySelector('#purple').style.background);
function changePurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)';
  document.querySelector('body').style.color = 'white';
}

function changeGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)';
  document.querySelector('body').style.color = 'white';
}

function changeBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)';
  document.querySelector('body').style.color = 'white';
}

function changeYellow() {
  document.querySelector('body').style.backgroundColor = 'yellow';
  document.querySelector('body').style.color = 'red';
}
