import { data } from "./hp.js";

let cards = document.querySelector('.cards')

let createCard = (obj) => {

	let card = document.createElement('div')
	let foto = document.createElement('img')
	let name = document.createElement('h2')
	let actor = document.createElement('p')
	let gender = document.createElement('p')
	let house = document.createElement('p')
	let wand = document.createElement('p')
	let alive = document.createElement('p')

	card.append(foto, name, actor, gender,house, wand, alive)

	foto.textcontent =  	obj['image']
	name.textContent = obj['name']
	actor.textContent = 'Actor: ' + obj['actor']
	gender.textContent = 'Gender: ' + obj['gender']
	house.textContent = 'House: ' + obj['house'];
	wand.textContent = `Wand core: ${obj['wand']['core'] ?? 'too early'}`;
	alive.textContent = `Alive: ${obj['alive'] ? 'yes' : 'no'} `;

card.className = 'cardHero'
foto.src = obj['image']
foto.className ='fotoHero'
name.className = 'nameHero'
actor.className = 'infoHero'
gender.className = 'infoHero'
house.className = 'infoHero'
wand.className = 'infoHero'
alive.className = 'infoHero'




cards.append(card)
}

data.forEach(createCard)
