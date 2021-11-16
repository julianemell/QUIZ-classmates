

const classmates = [
    { name: "Cat", image: "assets/01.jpg" },
    { name: "Also a Cat", image: "assets/02.jpg" },
    { name: "Alsooo a Cat", image: "assets/03.jpg" },
    
];


const classmateImg = document.getElementById("classmateImg");

//PICK OUT RANDOM IMG AND PLACE IN IMG SRC
function chose() {
    let classmate = Math.floor(Math.random() * classmates.length);
    classmateImg.setAttribute('src', classmates[classmate].image);
    
    console.log(classmate);
}

chose();

/* function alternativ() {
    let randomNumberName = Math.floor(Math.random() * classmates.length);
    const 
} */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const alphabet=["a","b","c","d","e"];
console.log(shuffleArray(alphabet)); 


/*
const form = document.querySelector(".quiz-form");

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form]
});
 */


//ändra class i resultat till display-block(?)



