document.querySelector('#finalRose').addEventListener('click', hide)

function hide(){
	document.querySelector('#claire').style.display = 'none'
	document.querySelector('#sharleen').style.display = 'none'
}

const andi = document.querySelector('#andi2')
const claire = document.querySelector('#claire2')
const sharleen = document.querySelector('#sharleen2')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
}

function claireNext(){
	claire.classList.toggle('hidden')
	sharleen.classList.add('hidden')
	andi.classList.add('hidden')
}

function sharleenNext(){
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
	andi.classList.add('hidden')
}

const contestants = document.querySelectorAll('.contestant')
console.log(contestants);
Array.from(contestants).forEach(element => console.log(element))
contestants.forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
  if(click.target.classList.contains('rose')){
    document.querySelector('#nikki3').classList.toggle('hidden')
  }
  else{
    alert("Wrong!");
  }
}
