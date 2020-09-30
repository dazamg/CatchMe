// GAME RULES;
// Part1√
// -must be able to determine time√
// -MUST be able to count the words √
// -Must be able to display score for how fast they type√

// List of Animals
const words = ['dog', 'rabbit', 'cat', 'shark', 'seahorse', 'turtle',
    'dolphin', 'tiger', 'bear', 'penguin', 'ladybug', 'elephant','giraffe', 'butterfly',
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


const settings = document.getElementById('settings');

const diffSelect = document.getElementById('difficulty');
let difficulty = localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : 'medium';

diffSelect.value =
localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : 'medium';

const gameType = document.getElementById('game');
let game = localStorage.getItem('game') !== null ?
localStorage.getItem('game') : 'planets';

gameType.value = 
localStorage.getItem('game') !== null ?
localStorage.getItem('game') : 'planets';

// Variable for random word
let randomWord;

//Variable for score
let score = 0;

//Variable for time
let time = 11;

//function to return a random Word
const randomWords = () => {
    return words[Math.floor(Math.random() * words.length)];    
}
//function to return a random Planet
const randomPlanet = () => {
    return moonWords[Math.floor(Math.random() * moonWords.length)];    
}
//function to return a random fruit or veggie
const randomFruits = () => {
    return fvWords[Math.floor(Math.random() * fvWords.length)];    
}

const endGame = document.getElementById('end-game-container');
//function to finsih and reset game
const finish = () => {
    if(score <= 4) {
        endGame.innerHTML = `
        <h1>You lost your rabbit</h1>
        <p>Your final score is ${score}</p>
        <img src='https://i.imgur.com/XmdVia6.gif' height= '80%'>
        <button onclick='location.reload()'>Reload</button>
        `; 
    }
    else if(score > 4 || score <= 8) {
        endGame.innerHTML = `
        <h1>You an All Star</h1>
        <p>Your final score is ${score}</p>
        <img src='https://p0.pikist.com/photos/929/976/dog-laptop-computer-glasses-spectacles-office-desk-pet-business.jpg' width= '40%' height= '60%'>
        <button onclick='location.reload()'>Reload</button>
        `; 
    } else {
        `<h1>You the Best</h1>
        <p>Your final score is ${score}</p>
        <img src=''>
        <button onclick='location.reload()'>Reload</button>
        `;
    }
    endGame.style.display = 'flex';
}

const startGame = () => {
    document.getElementById('start').addEventListener('click', () => {
//Timer
//setInterval allows user to run a specific function
//In this case i need my time to be updated
    const timeLimit = document.getElementById('time');
    const updateTime = () => {
        time--;
        timeLimit.innerHTML = time + 's';
        //the time is running pass 0 so i need a condition to start and reset the time
        if(time === 0) {
            clearInterval(timeInterval);
            finish();
        }
    }
    const timeInterval = setInterval(updateTime, 1100);

    })
    
}
startGame()

// select word
const word = document.getElementById('word');
const getWord = () => {
    if(game === 'animals') {
    randomWord = randomWords();
    word.innerHTML = randomWord;
    } else if(game === 'planets') {
    randomWord = randomPlanet();
    word.innerHTML = randomWord; 
    } else if(game === 'fruits') {
    randomWord = fvWords();
    word.innerHTML = randomWord;
    }
}
getWord()

// select Planet
 

//Function to update score
const scores = document.getElementById('score');
const addScore = () => {
    score++;
    scores.innerHTML = score;
}

//Function to update time

const text = document.getElementById('text');
text.addEventListener('input', (e) => {
    const insertedText = e.target.value;
    if(insertedText === randomWord) {
        getWord();
        addScore();
    //Need to clear the text after it has been written to continue playing
    e.target.value = '';
    if(difficulty === 'hard') {
        time += 2;
    } else if(difficulty === 'meduim') {
        time +=3
    } else {
        time += 5;
    }

    
    }
})

//
const form = document.getElementById('settings-form');
form.addEventListener('change', (e) => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
});

const newArray = document.getElementById('differentarrays');
form.addEventListener('change', (e) => {
    game = e.target.value;
    localStorage.setItem('game', game);
});


