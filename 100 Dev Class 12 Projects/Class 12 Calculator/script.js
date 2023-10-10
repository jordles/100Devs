let total = 0;

  document.querySelector('#placeToPutResult').innerText = total;
  document.querySelector('#zero').addEventListener('click', addZero);
  document.querySelector('#one').addEventListener('click', addOne);
  document.querySelector('#three').addEventListener('click', addThree);
  document.querySelector('#six').addEventListener('click', addSix);
  document.querySelector('#minusone').addEventListener('click', minusOne);
  document.querySelector('#minustwo').addEventListener('click', minusTwo);
  document.querySelector('#a').addEventListener('click', addA);
  document.querySelector('#b').addEventListener('click', addB);
  document.querySelector('#c').addEventListener('click', addC);
  function addZero(){
    total = 0;
    document.querySelector('#placeToPutResult').innerText = total;
  }
  function addOne(){
    total += 1;
    document.querySelector('#placeToPutResult').innerText = total;
  }
  function addThree(){
    total += 3;
    document.querySelector('#placeToPutResult').innerText = total;
  }
  function addSix(){
    total += 6;
    document.querySelector('#placeToPutResult').innerText = total;
  }
  function minusOne(){
    total -= 1;
    document.querySelector('#placeToPutResult').innerText = total;
  }
  function minusTwo(){
    total -= 2;
    document.querySelector('#placeToPutResult').innerText = total;
  }
  function addA(){
    total += 'a';
    document.querySelector('#placeToPutResult').innerText = total;
  }
  function addB(){
    total += 'b';
    document.querySelector('#placeToPutResult').innerText = total;
  }
  function addC(){
    total += 'c';
    document.querySelector('#placeToPutResult').innerText = total;
  }



