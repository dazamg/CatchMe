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
// list of countries
const countries = [
    'grenada', 'trinidad and tobacco', 'germany', 'russsia', 'brazil', 'france', 'italy', 
    'united kingdom', 'greece', 'sweden', 'belgium', 'croatia', 'denmark', 'ireland', 
    'ukraine', 'norway', 'argentina', 'bahamas', 'jamaica', 'puerto rico', 'mexico'
]

            
const bigWord = document.getElementById('word')
const differentPlayers = document.querySelector('.switch')
const endGame = document.getElementById('end-game-container');
const timeLimit = document.getElementById('time');
const textEnter = document.getElementById('text');
const scores = document.getElementById('score');
const selectElement = document.querySelector('.gamemode');
const form = document.getElementById('settings-form');
let input = document.querySelector('.final-score').value;
let mans = document.getElementById('man');
const settings = document.getElementById('settings');
let newInterval, timeInterval;


//Set the dropdown values to a default option
const diffSelect = document.getElementById('difficulty');
let difficulty = localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : 'medium';

diffSelect.value =
localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : 'medium';

const gameType = document.getElementById('modes');
let modes = localStorage.getItem('modes') !== null ?
localStorage.getItem('modes') : 'country';

gameType.value = 
localStorage.getItem('modes') !== null ?
localStorage.getItem('modes') : 'country';

// Variable for game Modes
let randomWord;
let fruitArray;
let planetArray;
let countryArray;

//Variable for time
let time = 11;

//Variable for score
let score = 0;

//Variable for current player
let currentplayer;

//Variable to determine if the game is playing
let gamePlay;
//variable for rounds
let roundScore = 0;

//variable for error
let errors = 0;

// I need to continue this after looping through the individual index for the string 
// let penaltyText = document.querySelector('final-score')
// let total_penalty = 0;
// characterEntered;

// const errorPenalty = () => {
    //get current input
    // let word_input = textEnter.value;
    // let word_input.array = word_input.split('');

    // characterEntered++;

    // errors = 0;

    // let charSpanArray = bigWord.querySelectorAll('span')

    // //loop through the span elements
    // charSpanArray.forEach((char. index) => {
    //     let typedChar = curr_input[index];

    //    // characters currently not typed 
    //    if(typedChar = null) {

    //    } typedChar === char.innerText {

    //    } else {

    //    }
    // })

// }



//function to return a random Animal
const randomWords = () => {
    return words[Math.floor(Math.random() * words.length)];    
}
//function to return a random Planet
const randomPlanet = () => {
    return moonWords[Math.floor(Math.random() * moonWords.length)];    
}
//function to return a random fruit or veggies
const randomFruits = () => {
    return fvWords[Math.floor(Math.random() * fvWords.length)];    
}

//function to return a random countries
const randomCountries = () => {
    return countries[Math.floor(Math.random() * countries.length)];    
}

//Function to update score
const addScore = () => {
    score++;
    scores.innerHTML = score;
}

//function to change game mode
const changeGame = () => {
                       
    selectElement.addEventListener('change', (event) => {
        const result = document.getElementById('word');
        
        if(event.target.value === 'animals') {
            bigWord.innerHTML = randomWord;
                      
        } else if(event.target.value === 'planets') {
            bigWord.innerHTML = planetArray;      
             
        } else if(event.target.value === 'fruits') {
            bigWord.innerHTML = fruitArray;      
            
        }  else if(event.target.value === 'country'){
            bigWord.innerHTML = countryArray;
        }
        
    });
}


//function to change arrays to a randomword
const animalWord = (changeGame) => {
    randomWord = randomWords();
    word.innerText = randomWord;
    
 }  

const planetWord = (changeGame) => {
    planetArray = randomPlanet();
    word.innerText = planetArray;
    
}

const fruitWord = (changeGame) => {
    fruitArray = randomFruits();
    word.innerText = fruitArray; 
     
}

const CountryWords = (changeGame) => {
    countryArray = randomCountries();
    word.innerText = countryArray; 
}


// match current inputed text with the random word 

const inputText = () => {
    textEnter.addEventListener('input', (e) => {
        const insertedText = e.target.value;
        if(insertedText === randomWord) {  
            animalWord(); 
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
        if(insertedText === fruitArray) {
            fruitWord()
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
        if(insertedText === planetArray){
            planetWord() 
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
        if(insertedText === countryArray) {
            console.log(CountryWords)
            CountryWords();
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

form.addEventListener('change', (e) => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
});




document.addEventListener('DOMContentLoaded', () => {
    //function to finish and reset game
      
    const finish = () => {
        if(score <= 7) {
            roundScore = score;
            endGame.innerHTML = `
            <h1>${currentplayer} you out of time and lost your rabbit</h1>
            <p>${currentplayer} final score is ${score}</p>
            <img src='images/lucy-m-KNMbRhf5IT8-unsplash.jpg' width= '35%' height= '55%'>
            <button onclick='location.reload()'>Reload</button>
            `; 
        }
        else if(score > 7 || score <= 12) {
            endGame.innerHTML = `
            <h1>${currentplayer} you out of time and you're an All Star</h1>
            <p>${currentplayer} final score is ${score}</p>
            <img src='https://p0.pikist.com/photos/929/976/dog-laptop-computer-glasses-spectacles-office-desk-pet-business.jpg' width= '40%' height= '60%'>
            <button onclick='location.reload()'>Reload</button>
    
            `; 
        } else {
            `<h1>${currentplayer} you out of time and you're the Best</h1>
            <p>${currentplayer} final score is ${score}</p>
            <img src=''>
            <button onclick='location.reload()'>Reload</button>
            `;
        }
        
        endGame.style.display = 'flex';
    }

    // start game button
    document.getElementById('start').addEventListener('click', () => {
        currentplayer = 'Player One';
        differentPlayers.textContent = 'Player One';
        differentPlayers.style.color = 'red';  
        //Timer
        //setInterval allows user to run a specific function
        //In this case i need my time to be updated
        const updateTime = () => {
            time--;
            timeLimit.innerHTML = time + 's';
            //the time is running pass 0 so i need a condition to start and reset the time
            if(time === 0) {
                clearInterval(timeInterval);
                finish()
            }
        }
        timeInterval = setInterval(updateTime, 1100); 
    })
    
    // start game button for playerTwo
    document.getElementById('player').addEventListener('click', () => {
        currentplayer = 'Player Two';
        differentPlayers.textContent = 'Player Two';
        differentPlayers.style.color = 'red';
        const newTime = () => {
            time--;
            timeLimit.innerHTML = time + 's';
            //the time is running pass 0 so i need a condition to start and reset the time
            if(time === 0) {
                clearInterval(newInterval);
                finish()
            }
        }
        newInterval = setInterval(newTime, 1100); 
    })
    
    //Instructions button
    const instructions = document.getElementById('rules')
    document.getElementById('rules').addEventListener('click', () => {
        instructions.innerHTML = `
        <p> <br>Difficulty</br>
        <br>-  Easy- 5 seconds added to every correct word spelled.</br>
        
        <br>-  Meduim- 3 seconds added to every correct word spelled.</br>
        
        <br>-  Hard - 2 seconds added to every correct word spelled.</br> 


        <br>        Penalty</br>
        <br> - 4 seconds remove to every wrong word spelled.</br>
        </p>
        <button onclick='location.reload()'>Reload</button>
        `;
    })
})



form.addEventListener('change', (e) => {
  difficulty = e.target.value;
   localStorage.setItem('difficulty', difficulty);
})

form.addEventListener('change', (e) => {
    difficulty = e.target.value;
     localStorage.setItem('modes', modes);
})


changeGame()
animalWord()
planetWord()
inputText()
fruitWord()
CountryWords()


// let optionTwo = document.getElementById('two')
// let optionThree = document.getElementById('three')
// console.log(optionTwo.value)
// const newArray = document.getElementById('differentarrays');
// form.addEventListener('change', (e) => {
//     games = e.target.value;
//     localStorage.setItem('cldd', games);
// }); 

// const spellcheck = () => {
    //     let textEntered = textEnter.value;
    //     let originTextMatch = bigWord.substring(0, textEntered.length);
    //     if(textEntered === bigWord) {
        //         text.style.borderColor = 'red';
        //     } else {
            //         time -= 4;
            //     }
            // }
            // 