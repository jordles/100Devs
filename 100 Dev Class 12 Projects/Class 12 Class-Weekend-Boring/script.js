document.querySelector('#check').addEventListener('click', check);

function check(){
  const day = document.querySelector('#day').value;

  //conditionals
  if((/Tuesday/i).test(day) || (/Thursday/i).test(day)){
    document.querySelector('#placeToSee').innerText = 'Class Day!';
  }
  else if((/Saturday/i).test(day) || (/Sunday/i).test(day)){
    document.querySelector('#placeToSee').innerText = 'Weekend!';
  }
  else{
    document.querySelector('#placeToSee').innerText = 'BORRRINGGGG';
  }
}
