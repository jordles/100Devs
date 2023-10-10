const synth = window.speechSynthesis;

let run = () => {
  const fName = document.querySelector('#firstName').value;
  const fMidName = document.querySelector('#firstMiddle').value;
  const fLastName = document.querySelector('#lastMiddle').value;
  const lName = document.querySelector('#lastName').value;

  const yellText = `${fName} ${fMidName} ${fLastName} ${lName}!!!!!`;
  document.querySelector('#placeToYell').innerText = yellText;

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);
}

document.querySelector('#yell').addEventListener('click', run);
