// GAME RULES;
// Part1√
// -must be able to determine time√
// -MUST be able to count the words √
// -Must be able to display score for how fast they type√
// const getWord = () => {

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


// const settings = document.getElementById('settings');
let mans = document.getElementById('man')
// let optionTwo = document.getElementById('two')
// let optionThree = document.getElementById('three')
// console.log(optionTwo.value)
const diffSelect = document.getElementById('difficulty');
let difficulty = localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : 'medium';

diffSelect.value =
localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : 'medium';

// const gameType = document.getElementById('man');
// let mans = localStorage.getItem('man') !== null ?
// localStorage.getItem('man') : 'planets';

// gameType.value = 
// localStorage.getItem('man') !== null ?
// localStorage.getItem('man') : 'planets';

// Variable for random word
let randomWord;

//Variable for time
let time = 11;

//Variable for score
let score = 0;

//function to return a random Animal
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
//function to finish and reset game
const finish = () => {
    if(score <= 7) {
        endGame.innerHTML = `
        <h1>You lost your rabbit</h1>
        <p>Your final score is ${score}</p>
        <img src='https://i.imgur.com/XmdVia6.gif' height= '80%'>
        <button onclick='location.reload()'>Reload</button>
        `; 
    }
    else if(score > 7 || score <= 12) {
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
// start game function

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

       

//Function to update score
const scores = document.getElementById('score');
const addScore = () => {
    score++;
    scores.innerHTML = score;
}

// function to change arrays to a randomword
// const getWord = () => {
//     console.log(mans.value)
//     if(mans.value === 'animals') {
//         randomWord = randomWords();
//         word.innerText = randomWord;
//     } else if(mans.value === 'planets') {
//         randomWord = randomPlanet();
//         word.innerText = randomWord;
//     } else if(mans === 'fruits') {
//         randomWord = randomFruits();
//         word.innerText = randomWord;
//     }
// }  
// getWord()

// match current inputed text with the random word 
const inputText = () => {
    const text = document.getElementById('text');
    text.addEventListener('input', (e) => {
        const insertedText = e.target.value;
        console.log(insertedText, randomWord)
        if(insertedText === randomWord) {     
            // getWord();
            addScore();
            //Need to clear the text after it has been written to continue playing
            e.target.value = '';
            if(difficulty === 'hard') {
                time += 2;
            } else if(difficulty === 'medium') {
                time +=3;
            } else {
                time += 5;
            } 
        }
    })
}
inputText()

//function to change game mode
const changeGame = () => {

    const selectElement = document.querySelector('.gamemode');                   
    selectElement.addEventListener('change', (event) => {
        const result = document.getElementById('word');
        if(event.target.value === 'animals') {
            randomWord = randomWords();
            word.innerText = randomWord;
            
        } else if(event.target.value === 'planets') {
            randomWord = randomPlanet();
            word.innerText = randomWord;
            
        } else if(event.target.value === 'fruits') {
            randomWord = randomFruits();
            word.innerText = randomWord;
        }
    });
}
changeGame()


//
const form = document.getElementById('settings-form');
form.addEventListener('change', (e) => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
});







// const newArray = document.getElementById('differentarrays');
// form.addEventListener('change', (e) => {
//     games = e.target.value;
//     localStorage.setItem('cldd', games);
// }); 
//     if(optionOne.value === 'animals') {
        // randomWord = randomWords();
        // word.innerHTML = randomWord;
//     } else if(optionTwo.value === 'planets') {
//             randomWord = randomPlanet();
//              word.innerHTML = randomWord;
//         } else if(optionTwo.value === 'fruits') {
//             randomWord = randomPlanet();
//             word.innerHTML = randomWord;
//         }       
//  }

// const getWord = () => {

//     const selectElement = document.querySelector('.gamemode');                   
//     selectElement.addEventListener('change', (event) => {
//         const result = document.getElementById('word');
//         if(event.target.value === 'animals') {
//             randomWord = randomWords();
//             result.textContent = randomWord;
//         } else if(event.target.value === 'planets') {
//             randomWord = randomPlanet();
//             word.innerText = randomWord;
//         } else if(event.target.value === 'fruits') {
//             randomWord = randomFruits();
//             word.innerText = randomWord;;
//         }
//     });
// }
// getWord()

// const optOne = () => {
    //     if(optionOne === word.innerText){
        //         randomWord()
        //     } else if(optionTwo === word.innerText){
            //         randomPlanet()
            //     } else if(optionThree === word.innerText){
                //         randomWord()
                //     }
                // }
                // // const word = document.getElementById('word')
                // const getWord = () => {
                //     if(words.innerText === 'animals') {
                //         randomWord = randomWords();
                //         word.innerText = randomWord;
                //     } else if(words.innerText === 'planets') {
                //         randomWord = randomPlanets();
                //         word.innerText = randomWord; 
                //     } else if(words.innerText === 'fruits') {
                //         randomWord = randomFruits();
                //         word.innerText = randomWord; 
                //     }

             