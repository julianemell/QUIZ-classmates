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

const form = document.querySelector('.quizform');
const userResult = document.querySelector('.user-result');


// Plocka ut en random img från classmates array och placera i img src(html)
const classmateImg = document.querySelector("#classmateImg");
let classmate = Math.floor(Math.random() * classmates.length);


classmateImg.setAttribute('src', classmates[classmate].image);
console.log(classmate);

//plocka ut namnet till classmateImg
const classmateIndex = classmates[classmate];
console.log(classmateIndex);
let randomClassmateCorrect = classmateIndex.name;
console.log(randomClassmateCorrect);

//Fisher-Yates algorith för att blanda classmates array
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
	const j = Math.floor(Math.random() * (i + 1));
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
	}
}
shuffleArray(classmates);
//console.log("classmates after shuffle", classmates);

//lägger detta i en funktion för att senare kunna kalla på den när man klickar på ett svarsalternativ
const loadQuestion = () => {
	
	// plocka ut tre random namn
	const threeClassmates = classmates.slice(0, 3);
	//console.log(threeClassmates);

	// skapa en array med 3 random namn och det rätta namnet (4 tot)
	const fourClassmatesNames = threeClassmates.map(classmates => classmates.name);
	fourClassmatesNames.push(randomClassmateCorrect);
	//console.log(fourClassmatesNames);

	shuffleArray(fourClassmatesNames);
	//console.log("four classmates after shuffle", fourClassmatesNames);


	//loopa array och placera ut namn på knapparna
	let numClassmates = fourClassmatesNames.length;
	for (let i = 0; i < numClassmates; i++) {
		let button = `
				<div class="button">
					<button class="classmate-choice btn btn-primary p-2 px-4" id="classmate">${fourClassmatesNames[i]}</button>
				</div>
			`;

		form.innerHTML += button;
	}
}

loadQuestion();

//klickar man på rätt namn så ska 10% adderas på resultatet
//klickar man på fel så händer inget med resultatet
//när man klickar (kvittar rätt eller fel) så går man över till nästa bild - loop pausas
//efter 10 bilder så ska resultatet visas
//ev knapp för att starta om spelet.



let score = 0;
let questionNum = 0;
let quizQuestions = document.querySelector('.quiz-container');

//kolla om det är rätt eller fel namn

//lägg till en function som gör att när vi klickar så visas nästa fråga 
//on click så laddas nytt foto och namn upp

document.querySelectorAll('.classmate-choice').forEach(el => el.addEventListener('click', e => {
	e.preventDefault();
	form.innerHTML = '';
	
	let answer = e.target.innerText; //plockar ut namnet som man trycker på
	console.log(answer);
	
	//vi vill köra 10 frågor och sedan visa resultatet
	questionNum++;
	
	if (e.target.tagName === "BUTTON" && answer === randomClassmateCorrect) {
		//10% adderas på resultatet
		score += 10;
		
	} else if (e.target.tagName != "BUTTON") {
		return false;

	} else if (e.target.tagName === "BUTTON" && questionNum === 10) {
		userResult.classList.remove('d-none');
		quizQuestions.classList.add('d-none');

	} else if (e.target.tagName === "BUTTON" && answer != randomClassmateCorrect) {
		loadQuestion();
	}
	
	userResult.innerText = `${score}%`;
	//loadQuestion();

	console.log(questionNum);
}));



