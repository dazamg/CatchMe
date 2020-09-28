// GAME RULES;
// Part 1
// -must be able to determine time
// -MUST be able to count the words 
// -Must be able to display score for how fast they type


// List of Animals
const words = ['dog', 'rabbit', 'cat', 'shark', 'seahorse', 'turtle',
    'dolphin', 'tiger', 'bear', 'Penguin', 'ladybug', 'elephant','giraffe', 'butterfly',
    'spider', 'dinosaur', 'fox', 'hamster', 'koala', 'anteater'
]

// List of Moons
const moonWords = ['earth', 'jupiter', 'saturn', 'neptune', 'mars', 'venus', 
'uranus', 'mercury', 'pluto']

//List of fruits and veggies
const fvWords = [ 'banana', 'carrot', 'spinach', 'orange', 'mango', 'grapes', 'strawberry', 
    'apple', 'blueberry', 'pineapple', 'watermelon', 'nectarine', 'pomegranate',
    'cabbage', 'cucumber', 'potato', 'ginger', 'avocado', 'radish',
    'mushroom', 'pepper', 'pumpkin'
]
const word = document.getElementById('word');
const text = document.getElementById('text');
const scores = document.getElementById('score');
const timeLimit = document.getElementById('time');
const endGame = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const form = document.getElementById('form');
const diffSelect = document.getElementById('Difficulty');
// Variable for random word
let randomWord;

//Variable for score
let score = 0;

//Variable for time
let time = 10;

//function to return a randomWord
const randomWords = () => {
    return words[Math.floor(Math.random() * words.length)];
} 
// select word
const getWord = () => {
    randomWord = randomWords();
    word.innerHTML = randomWord;
}
getWord()

//Function to update score
const addScore = () => {
    score++;
    scores.innerHTML = score;
}


text.addEventListener('input', (e) => {
    const insertedText = e.target.value;
    if(insertedText === randomWord) {
        getWord();
        addScore();
    //Need to clear the text after it has been written to continue playing
    e.target.value = '';
    }
})


 


