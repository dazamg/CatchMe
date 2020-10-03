
//function to change game mode
const changeGame = () => {
    const selectElement = document.querySelector('.gamemode');                   
    selectElement.addEventListener('change', (event) => {
        const result = document.getElementById('word');
        
        if(event.target.value === 'animals') {
            // randomWord = randomWords();
            bigWord.innerHTML = randomWord;
            
            
            
        } else if(event.target.value === 'planets') {
            bigWord.innerHTML = planetArray;
            
            
        } else {
            bigWord.innerHTML = fruitArray;
            
        }
        
    });
}
changeGame()

//function to change arrays to a randomword
const animalWord = (changeGame) => {
        randomWord = randomWords();
       word.innerText = randomWord;
 }  
animalWord()
const planetWord = (changeGame) => {
    
    planetArray = randomPlanet();
    word.innerText = planetArray;
}
planetWord()
const fruitWord = (changeGame) => {
    fruitArray = randomFruits();
    word.innerText = fruitArray;   
}
fruitWord()

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
            randomFruits() 
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

    })
}
inputText()
