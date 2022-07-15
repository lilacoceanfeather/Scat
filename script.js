// Define all the cards!!  

const AceOfClubs = 1 // Starting with the Clubs... 
const TwoOfClubs = 2
const ThreeOfClubs = 3
const FourOfClubs = 4
const FiveOfClubs = 5
const SixOfClubs = 6
const SevenOfClubs = 7
const EightOfClubs = 8
const NineOfClubs = 9
const TenOfClubs = 10
const JackOfClubs = 11
const QueenOfClubs = 12
const KingOfClubs = 13 // Clubs are 1 through 13

const AceOfDiamonds = 14 // Diamonds start
const TwoOfDiamonds = 15
const ThreeOfDiamonds = 16
const FourOfDiamonds = 17
const FiveOfDiamonds = 18
const SixOfDiamonds = 19
const SevenOfDiamonds = 20
const EightOfDiamonds = 21
const NineOfDiamonds = 22
const TenOfDiamonds = 23
const JackOfDiamonds = 24
const QueenOfDiamonds = 25
const KingOfDiamonds = 26 // Diamonds are 14 through 26

const AceOfHearts = 27 // Hearts start!
const TwoOfHearts = 28
const ThreeOfHearts = 29
const FourOfHearts = 30
const FiveOfHearts = 31
const SixOfHearts = 32
const SevenOfHearts = 33
const EightOfHearts = 34
const NineOfHearts = 35
const TenOfHearts = 36
const JackOfHearts = 37
const QueenOfHearts = 38
const KingOfHearts = 39 // Hearts are 27 through 39

const AceOfSpades = 40 // Spades start
const TwoOfSpades = 41
const ThreeOfSpades = 42
const FourOfSpades = 43
const FiveOfSpades = 44
const SixOfSpades = 45
const SevenOfSpades = 46
const EightOfSpades = 47
const NineOfSpades = 48
const TenOfSpades = 49
const JackOfSpades = 50
const QueenOfSpades = 51
const KingOfSpades = 52 // Spades end. All cards are defined!

function initializeTwoPlayerGame() {
	    let playerInfo = document.getElementById("player-info")
	    let gameStyle = document.getElementById("game-style")
	    let displaySetting = playerInfo.style.display;
	    if (displaySetting == 'none') {
	    	  playerInfo.style.display = 'block';
	    }
	    else { 
	    	playerInfo.style.display = 'none';
	    }
}

function getPlayerInfo() {
	localStorage.setItem("p1, p2");
	window.location.href="player-details.html";
	let p1Name = localStorage.getItem("p1")
	let p2Name = localStorage.getItem("p2")
	document.getElementById('p1') = p1Name
	document.getElementById('p2') = p2Name
	console.log(p1Name)
	console.log(p2Name)
}

function generateRandom(min = 1, max = 52) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    let generateNumber = document.getElementById("insert-number")
    generateNumber.textContent = rand
 }

 function generateCard(min = 1, max = 52) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    let generateNumber = document.getElementById("insert-number")
    generateNumber.textContent = rand
    switch (rand) {
    	case 1: generateNumber.textContent = "Ace of Clubs"
    	break;
    	case 2: generateNumber.textContent = "Two of Clubs"
    	break;
    	case 3: generateNumber.textContent = "Three of Clubs"
    	break;
    	case 4: generateNumber.textContent = "Four of Clubs"
    	break;
    	case 5: generateNumber.textContent = "Five of Clubs"
    	break;
    }
 }

  function generateNewCard(min = 1, max = 52) {
    let difference = max - min;
    let rand = Math.random();
    let newCard = document.getElementById("new-card")
    rand = Math.floor(rand * difference);
    rand = rand + min;
    switch (rand) {
    	case 1: newCard.src = "./images/AC.png"  	
    	break;
    	case 2: newCard.src = "./images/2C.png"
    	break;
    	case 3: newCard.src = "./images/3C.png"
    	break;
    	case 4: newCard.src = "./images/4C.png"  
    	break;
    	case 5: newCard.src = "./images/5C.png"
    	break;
        case 6: newcard.src = "./images/6C.png"
        break;
        case 7: newCard.src = "./images/7C.png"
        break;
        case 8: newCard.src = "./images/8C.png"
        break;
        case 9: newCard.src = "./images/9C.png"
        break;
        case 10: newCard.src = "./images/10C.png"
        break;
        case 11: newCard.src = "./images/JC.png"
        break;
        case 12: newCard.src = "./images/QC.png"
        break;
        case 13: newCard.src = "./images/KC.png"
        break;
    }
    let 
 }

  function generateSecondCard(min = 1, max = 52) {
    let difference = max - min;
    let rand = Math.random();
    let newCard = document.getElementById("second-card")
    rand = Math.floor(rand * difference);
    rand = rand + min;
    switch (rand) {
        case 1: newCard.src = "./images/AC.png"     
        break;
        case 2: newCard.src = "./images/2C.png"
        break;
        case 3: newCard.src = "./images/3C.png"
        break;
        case 4: newCard.src = "./images/4C.png"  
        break;
        case 5: newCard.src = "./images/5C.png"
        break;
        case 6: newcard.src = "./images/6C.png"
        break;
        case 7: newCard.src = "./images/7C.png"
        break;
        case 8: newCard.src = "./images/8C.png"
        break;
        case 9: newCard.src = "./images/9C.png"
        break;
        case 10: newCard.src = "./images/10C.png"
        break;
        case 11: newCard.src = "./images/JC.png"
        break;
        case 12: newCard.src = "./images/QC.png"
        break;
        case 13: newCard.src = "./images/KC.png"
        break;
    }
 }

   function generateThirdCard(min = 1, max = 52) {
    let difference = max - min;
    let rand = Math.random();
    let newCard = document.getElementById("third-card")
    rand = Math.floor(rand * difference);
    rand = rand + min;
    switch (rand) {
        case 1: newCard.src = "./images/AC.png"     
        break;
        case 2: newCard.src = "./images/2C.png"
        break;
        case 3: newCard.src = "./images/3C.png"
        break;
        case 4: newCard.src = "./images/4C.png"  
        break;
        case 5: newCard.src = "./images/5C.png"
        break;
        case 6: newcard.src = "./images/6C.png"
        break;
        case 7: newCard.src = "./images/7C.png"
        break;
        case 8: newCard.src = "./images/8C.png"
        break;
        case 9: newCard.src = "./images/9C.png"
        break;
        case 10: newCard.src = "./images/10C.png"
        break;
        case 11: newCard.src = "./images/JC.png"
        break;
        case 12: newCard.src = "./images/QC.png"
        break;
        case 13: newCard.src = "./images/KC.png"
        break;
    }
 }

