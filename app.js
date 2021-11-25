//	QUIZ-SPEL! Gissa namnet!

// Array av classmates med namn och img
const classmates = [
	{
		"name" : "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];

//Fisher-Yates algorith för att blanda classmates array
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
	const j = Math.floor(Math.random() * (i + 1));
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
	}
}

//console.log("classmates after shuffle", classmates);

const form = document.querySelector('.quizform');
const classmateImg = document.querySelector("#classmateImg");
let correctClassmateName = "";




//lägger detta i en funktion för att senare kunna kalla på den när man klickar på ett svarsalternativ
const loadQuestion = () => {
	//blanda array med classmates
	shuffleArray(classmates);

	// plocka ut fyra random namn
	let classmateAlternatives = classmates.slice(0, 4);

	// Plocka ut en classmate på index 0 från classmateAlternatives array och placera i img src(html)
	let correctClassmate = classmateAlternatives[0];
	classmateImg.setAttribute('src', correctClassmate.image);
	
	//plocka ut namn från object correct classmate
	correctClassmateName = correctClassmate.name;
	
	//plocka ut namn från object classmateAlternativesNames
	let classmateAlternativesNames = classmateAlternatives.map(classmates => classmates.name);
	
	//blanda classmateAlternativesNames
	shuffleArray(classmateAlternativesNames);
	
	//loopa över classmateAlternativesNames och placera ut buttons
	let numClassmates = classmateAlternativesNames.length;
	
	for (let i = 0; i < numClassmates; i++) {
		let button = `
				<div class="button">
				<button class="classmate-choice btn btn-primary p-2 px-4">${classmateAlternativesNames[i]}</button>
				</div>
				`;
				
		form.innerHTML += button;
			
	}
	answerClick();
}


let score = 0;
let questionNum = 0;
let quizQuestions = document.querySelector('.quiz-container');

//kolla om det är rätt eller fel namn

//lägg till en function som gör att när vi klickar så visas nästa fråga 
//on click så laddas nytt foto och namn upp

let userResult = document.querySelector('.user-result');

let correctAnswersArray = [];
let wrongAnswerArray = [];

const answerClick = () => {
	let answerEl = document.querySelectorAll('.classmate-choice');
	
	answerEl.forEach(answer => {
		answer.addEventListener('click', e => {

			questionNum++;
			form.innerHTML = '';
			
			let answer = e.target.innerText;
			//console.log(answer);
			
			if (answer === correctClassmateName) {
				//10% adderas på resultatet
				score += 10;
				console.log("same as correct classmate", answer);
			} else if (answer != correctClassmateName) {
				score += 0;
				console.log("wrong classmate, it should be:", answer);
			}
			userResult.innerText = `${score}%`;
			console.log(userResult.innerText = `${score}%`);
			console.log(questionNum);

			loadQuestion();

			if (questionNum === 10) {
				endOfGame();
			}
		});
});
}

loadQuestion();

let resultShow = document.querySelector('#result');
const endOfGame = () => {
	resultShow.classList.remove('d-none');
	quizQuestions.classList.add('d-none');
	//loadQuestion();
}

let restartGameEl = document.querySelector('#restart-game');

restartGameEl.addEventListener('click', () => {
	resultShow.classList.add('d-none');
	quizQuestions.classList.remove('d-none');
	loadQuestion();
	//console.log("testing");
});


/* 
	
	
	//vi vill köra 10 frågor och sedan visa resultatet
	//questionNum++;
	
	if (e.target.innerHTML === correctClassmate) {
		//10% adderas på resultatet
		score += 10;
		correctAnswersArray.push(answer);
		
	} else if (e.target.innerHTML != correctClassmate) {
		score += 0;
		wrongAnswerArray.push(answer);
		
	} else if (e.target.tagName === "BUTTON" && questionNum === 10) {
		userResult.classList.remove('d-none');
		quizQuestions.classList.add('d-none');
	}

		
	if (e.target.tagName != "BUTTON") {
		return false;
	}
	
	loadQuestion();
	
	console.log(questionNum);
*/