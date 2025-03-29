// let difficultyChoice = document.querySelector('input[name="difficulty"]:checked').value



// let subjectChoice = document.querySelector('input[name="subject"]:checked').value
const body = document.getElementsByTagName("body")[0];

///twra prostethikan
let gamePaused = false;
let backgroundStage=undefined;
const entryBtn = document.getElementById("enter-btn");
const entryContainer=document.getElementById("start-page")
let backgroundTemplates = [{name :"forest",pic:"/images/forest6.webp"},{name:"pyramid",pic:"/images/pyramids1.webp"},{name:"bigben",pic:"/images/big-ben.webp"},{name:"space",pic:"/images/space2.webp"},{name:"north-pole",pic:"/images/ice1.webp"},{name:"underwater",pic:"/images/buble.webp"}]


const choices = document.getElementById("choices");
const gamePreferences = document.getElementById("game-preferences");
const startBtn = document.getElementById("start-game");
const pauseBtn = document.getElementById('pause-game');
pauseBtn.style.display="none";
const resetBtn = document.getElementById("reset")
let game = document.getElementById("game");
let miniGame=document.getElementById("mini-game")
let bonusBtn=document.getElementById("bonus-btn");
let bonusInput=document.getElementById("bonus-input")
let backgroundMusic=document.getElementById("background-music");

// backgroundMusic.play();
let starterMusic;
let foundedInARow = 0;
let foundedPar = document.getElementById("founded_item");
let baby = document.getElementById("baby_appear");
localStorage.setItem("score",0)
let bonusGameArray=[];
let initialBonusArray;
let bonusMsg=document.getElementById("messageBonus");
let godMsg=document.getElementById("godMsg")

let fronts = document.getElementsByClassName("front");
let backs = document.getElementsByClassName("back");


let leftArrow = document.getElementById("left-arrow")
let rightArrow = document.getElementById("right-arrow");
let GameSettings={
    screenResizing:false,
    playedAgain:false,
    boardColumns:4,
    boardRows:4,
    difficultyChoice:"easy",
    subjectChoice:"football"



}

// leftArrow.addEventListener("click", () => {
//     if(choices.style.transform = "translateX(-75%)"){
//         leftArrow.style.display="none"
//         rightArrow.style.display="block"
//     }else{
//     choices.style.transform = "translateX(-75%)"
//     }
// })

// rightArrow.addEventListener("click", () => {
//     if(choices.style.transform = "translateX(0%)"){
//         rightArrow.style.display="none"
//         leftArrow.style.display="block"
//     }else{
         
    
//     choices.style.transform = "translateX(0%)"
//     }
// })


let footballArray = [{ pic: "real", name: "Real Madrid" }, { pic: "barcelona", name: "Barcelona" }, { pic: "juve", name: "Juventus" }, { pic: "manunited", name: "Manchester United" },
{ pic: "liverpool", name: "Liverpool" }, { pic: "milan", name: "Milan" }, { pic: "inter", name: "Internazionale" }, { pic: "bayern", name: "Bayern Munich" },
{ pic: "chelsea", name: "Chelsea" }, { pic: "dortmund", name: "Borussia Dortmund" }, { pic: "atletico", name: "Atletico Madrid" }, { pic: "porto", name: "Porto" }, { pic: "ajax", name: "Ajax" },
{ pic: "benfica", name: "Benfica" }, { pic: "arsenal", name: "Arsenal" }, { pic: "psg", name: "Paris St. Germain" }, { pic: "pao", name: "Panathinaikos" }, { pic: "osfp", name: "Olympiakos" },
{ pic: "dinamo", name: "Dinamo Kiev" }, { pic: "city", name: "Manchester City" }, { pic: "marseille", name: "Marseille" }, { pic: "galata", name: "Galatasaray" },
{ pic: "celtic", name: "Celtic" }, { pic: "rangers", name: "Glascow Rangers" }, { pic: "anderlecht", name: "Anderlecht" }, { pic: "aek", name: "AEK" }, { pic: "lyon", name: "Lyon" },
{ pic: "eindhoven", name: "PSV Eindhoven" }, { pic: "napoli", name: "Napoli" }, { pic: "leverkusen", name: "Bayer Leverkusen" }, { pic: "leipzig", name: "Leipzig" },
{ pic: "roma", name: "Roma" }, { pic: "valencia", name: 'Valenica' }, { pic: "fener", name: "Fenerbahche" }, { pic: "feyen", name: "Feyenoord" }, { pic: "zvezda", name: "Red Star" },
{ pic: "monaco", name: "Monaco" }, { pic: "totthenham", name: "Totthenham" }, { pic: "rosenborg", name: "Rosenborg" }, { pic: "lazio", name: "Lazio" }, { pic: "sparta", name: "Sparta Prague" }
    , { pic: "spartak", name: "Spartak Moscow" }]




let countriesArray = [{ pic: "greece", name: "Greece" }, { pic: "germany", name: "Germany" }, { pic: "italy", name: "Italy" }, { pic: "france", name: "France" }, { pic: "usa", name: "USA" },
{ pic: "spain", name: "Spain" }, { pic: "russia", name: "Russia" }, { pic: "china", name: "China" }, { pic: "brazil", name: "Brazil" }, { pic: "portugal", name: "Portugal" }, { pic: "norway", name: "Norway" }, { pic: "turkey", name: "Turkey" },
{ pic: "southafrica", name: "South Africa" }, { pic: "saudi", name: "Saudi Arabia" }, { pic: "grbritain", name: "Great Britain" }, { pic: "sweden", name: "Sweden" },
{ pic: "finland", name: "Finland" }, { pic: "denmark", name: "Denmark" }, { pic: "argentina", name: "Argentina" }, { pic: "japan", name: "Japan" }, { pic: "cuba", name: "Cuba" },
{ pic: "newzeeland", name: "New Zeeland" }, { pic: "mexico", name: "Mexico" }, { pic: "chile", name: "Chile" }, { pic: "canada", name: "Canada" }, { pic: "austria", name: "Austria" },
{ pic: "romania", name: "Romania" }, { pic: "bulgaria", name: "Bulgaria" }, { pic: "albania", name: "Albania" }, { pic: "croatia", name: "Croatia" }, { pic: "india", name: "India" },
{ pic: "cameroon", name: "Cameroon" }, { pic: "morocco", name: "Morocco" }, { pic: "egypt", name: "Egypt" }, { pic: "iraq", name: "Iraq" }, { pic: "switzerland", name: "Switzerland" },
{ pic: "poland", name: "Poland" }, { pic: "czech", name: "Czech Republic" }, { pic: "hungary", name: 'Hungary' }, { pic: "northkorea", name: "North Korea" }, { pic: "belgium", name: "Belgium" },
{ pic: "mongolia", name: "Mongolia" }]



let jungleArray = [{ pic: "lion", name: "Lion" }, { pic: "tiger", name: "Tiger" }, { pic: "elephant", name: "Elephant" }, { pic: "parrot", name: "Parrot" }, { pic: "bear", name: "Bear" },
{ pic: "hippo", name: "Hippo" }, { pic: "monkey", name: "Monkey" }, { pic: "snake", name: "Snake" }, { pic: "lemur", name: "Lemur" }, { pic: "gorilla", name: "Gorilla" }, { pic: "tapir", name: "Tapir" },
{ pic: "armadillo", name: "Armadillo" }, { pic: "giraffe", name: "Girrafe" }, { pic: "leopard", name: "Leopard" }, { pic: "wolf", name: "Wolf" }, { pic: "fox", name: "Fox" },
{ pic: "goose", name: "Goose" }, { pic: "deer", name: "Deer" }, { pic: "kangaroo", name: "Kangaroo" }, { pic: "spider", name: "Spider" }, { pic: "turtle", name: "Turtle" }, { pic: "camel", name: "Camel" },
{ pic: "frogey", name: "Frogey" }, { pic: "lizard", name: "Lizard" }, { pic: "rabbit", name: "Rabbit" }, { pic: "crocodile", name: "Crocodile" }, { pic: "goat", name: "Goat" }, { pic: "bull", name: "Bull" },
{ pic: "horse", name: "Horse" }, { pic: "whiteHorse", name: "White Horse" }, { pic: "hedgehog", name: "Hedgehog" }, { pic: "kitten", name: "Cat" }, { pic: "polarBear", name: "Polar Bear" },
{ pic: "mamba", name: "Mamba" }, { pic: "labradorDog", name: "Labrador" }, { pic: "mouse", name: "Mouse" }, { pic: "whiteDuck", name: "White Duck" }, { pic: "anteater", name: "Anteater" },
{ pic: "duck", name: "Duck" }, { pic: "blackPanther", name: "Black Panther" }, { pic: "jaguar", name: "Jaguar" }, { pic: "pitbull", name: "Pitbull" }];




let personalitiesArray = [{ pic: "hitler", name: "Adolf Hitler" }, { pic: "stalin", name: "Joseph Stalin" }, { pic: "lenin", name: "Vladimir Lenin" }, { pic: "churchill", name: "Winston Churchill" },
{ pic: "motherTeresa", name: "Mother Teresa" }, { pic: "einstein", name: "Albert Einstein" }, { pic: "gandhi", name: "Mahatma Gandhi" }, { pic: "lama", name: "Dalai Lama" },
{ pic: "aristotle", name: "Aristotle" }, { pic: "beethoven", name: "Ludwig van Beethoven" }, { pic: "elizabeth", name: "Elizabeth II" }, { pic: "marx", name: "Karl Marx" },
{ pic: "licoln", name: "Abraham Licoln" }, { pic: "napoleon", name: "Napoleon Bonaparte" }, { pic: "newton", name: "Isaac Newton" }, { pic: "alexander", name: "Alexander The Great" },
{ pic: "tesla", name: "Nikola Tesla" }, { pic: "mandela", name: "Nelson Mandela" }, { pic: "shakespeare", name: "William Shakespeare" }, { pic: "che", name: "Ernesto Guevara" },
{ pic: "chaplin", name: "Charlie Chaplin" }, { pic: "curie", name: "Marie Curie" }, { pic: "luther", name: "Martin Luther King" }, { pic: "schrodinger", name: "Erwin Schrödinger" },
{ pic: "galileo", name: "Galileo Galilei" }, { pic: "colombus", name: "Christopher Columbus" }, { pic: "mozart", name: "Wolfgang Amadeus Mozart" },
{ pic: "charlemagne", name: "Charlemagne or Charles" }, { pic: "planck", name: "Max Planck" }, { pic: "mao", name: "Mao Zedong" }, { pic: "ali", name: "Muhammad Ali" },
{ pic: "roosevelt", name: "Franklin D. Roosevelt" }, { pic: "plato", name: "Plato" }, { pic: "senna", name: "Ayrton Senna" }, { pic: "darwin", name: "Charles Darwin" },
{ pic: "voltaire", name: "Voltaire" }, { pic: "heisenberg", name: "Werner Karl Heisenberg" }, { pic: "vasco", name: "Vasco Da Gama" }, { pic: "putin", name: "Vladimir Putin" },
{ pic: "freud", name: "Sigmund Freud" }, { pic: "monroe", name: "Marylin Monroe" }, { pic: "mendeleev", name: "Dmitriy Mendeleyev" }]



// function setTheGame(type, difficulty) {
//     let numberOfElements = findTheNumberOfBlock(difficulty);
//     let gameArray = selectRandomValues(type, numberOfElements);
//     let finalArray = duplicateTheValues(gameArray)
//     console.log(finalArray)
//     return finalArray
// }


// function findTheNumberOfBlock(difficulty) {
//     let numberOfElements
//     if (difficulty == easy) {
//         numberOfElements = 8;
//     } else if (difficulty == medium) {
//         numberOfElements = 15;
//     } else if (difficulty == hard) {
//         numberOfElements = 25
//     } else {
//         numberOfElements = 42
//     }
//     return numberOfElements
// }

// function selectRandomValues(type, numberOfElements) {
//     let gameArray = [];
//     let randomElement
//     for (let i = 0; i < numberOfElements; i++) {
//         randomElement = type[Math.floor(Math.random() * type.length)];
//         if (!gameArray.includes(randomElement)) {
//             gameArray[i] = randomElement

//         } else {
//             i = i - 1;
//         }
//         // gameArray[i]=type[Math.floor(Math.random() * type.length)];
//     }

//     return gameArray
// }


// function duplicateTheValues(gameArray) {
//     finalArray = [...gameArray, ...gameArray];
//     finalArray.sort(function () {
//         return Math.random() - 0.5;
//     })

//     return finalArray;

// };

// setTheGame(footballArray, expert)













///Arrays for quizzes
//Football
//Easy


entryBtn.addEventListener("click",(event)=>{
    entryContainer.style.display = "none"; 
    document.body.classList.remove("hidden-mode"); 
//  cardsAtStart(event);
});


// cardsAtStart = (event)=>{
//     console.log(event);
//     const cardContainer = document.getElementById("card-background");
// // document.getElementById("card-background").innerHTML = "";
//    cardContainer.replaceChildren();
//     const backgroundNumCards = 8; 
//     let picArray;
//     console.log("CLICKED ONCHANHE");
//     switch (event.target.value) {
//         case "football":
//             picArray = footballArray
//             break;
//         case "jungle":
//             picArray = jungleArray
//             break;
//         case "countries":
//             picArray = countriesArray
//             break;
//         case "personalities":
//             picArray = personalitiesArray
//             break;
//         default:
//             picArray = footballArray
//     }

//     for (let i = 0; i < backgroundNumCards; i++) {
//         const backgroundCard = document.createElement("div");
//         // backgroundCard.classList.add("card")
//         backgroundCard.classList.add("backgroundCard")
       

       
//         const randomIndex = Math.floor(Math.random() * picArray.length);
//         const randomClass = picArray.splice(randomIndex, 1)[0].pic;

//         backgroundCard.classList.add(randomClass);

//         setTimeout(() => {
//             backgroundCard.style.opacity = "0.5";
//         }, i * 300); 

//         // setTimeout(() => {
//         // }, 5000 + (backgroundNumCards - i) * 300);

//         cardContainer.appendChild(backgroundCard);
//     }

// }



// let classesEasy = easyFootball
// let classesMedium = mediumFootball
// let classesHard = hardFootball
// let classesExpert = expertFootball
//***********************AUDIO FUNTION**********************8 */
function play(sound, vol) {
    let audio = new Audio(sound);
    audio.volume = vol;
    const promise = audio.play();

    if (promise !== undefined) {
        promise.then(() => {

            // autoplay starts!
        }).catch(error => {
            //show error
            console.log(error)
            audio.play()
        });
    }
    return audio;
}

/***STARTING MUSIC WHEN LOAD THE PAGE****************** */
window.onload = () => {
    backgroundMusic.play();
  };
// window.addEventListener('load', () => {
//     starterMusic=play("/Memory-Game/sounds/gamemusic.mp3",1)
//     console.log(starterMusic)
// });



//creating sounds
// let AUDIO_CONTEXT=new(AudioContext||webkitAudioContext||window.webkitAudioContext)
// let keys={
//     DO:261.6,
//     RE:293.7,
//     MI:329.6
// }


// function playNote(key,duration){
//     let osc=AUDIO_CONTEXT.createOscillator();
//     osc.frequency.value=key
//     osc.start(AUDIO_CONTEXT.currentTime);
//     osc.stop(AUDIO_CONTEXT.currentTime+duration/1000);
//     osc.connect(AUDIO_CONTEXT.destination)
//     setTimeout(function(){
//         osc.disconnect()
//     },duration)

// }

//VARIABLES FOR COUNTER
let active = false;
let minuteCount = 0
let secondCount = 0
function clock(active) {
    let minutes = document.getElementById("sMin")
    let seconds = document.getElementById("sSec")


    if (active == true) {
        run = setInterval(() => {
            secondCount++
            if (secondCount >= 0 && secondCount <= 9) {
                seconds.innerHTML = "0" + secondCount
            } else if (secondCount >= 10 && secondCount <= 59) {
                seconds.innerHTML = secondCount
            } else if (secondCount = 60) {
                secondCount = 0

                minuteCount++
                seconds.innerHTML = "0" + secondCount


            }
            if (minuteCount <= 9) {
                minutes.innerHTML = "0" + minuteCount
            } else if (minuteCount >= 10 && minuteCount <= 59) {
                minutesInnerHTML = minuteCount

            } else {
                clearInterval(run);
                minuteCount = 0
                secondCount = 0
            }

        }, 1000)


        // counter.innerHTML = clock++ }, 1000)
    } else {
        clearInterval(run);
    }
}
/****************************************************************END CLOCK********************************** */
const subjectRadios = document.getElementsByName("subject")

function changerSubjectRadios() {
    Array.from(subjectRadios).forEach((radio) => {
        radio.addEventListener("change", () => {
            console.log(radio.value);
            if (radio.value == "football") {
                body.style.backgroundImage = 'url("https://i.pinimg.com/736x/41/b7/07/41b707b7632118fd15807ed0bc9c85bc.jpg")'
                // classesEasy = easyFootball
                // classesMedium = mediumFootball
                // classesHard = hardFootball
                // classesExpert = expertFootball


            } else if (radio.value == "countries") {
                body.style.backgroundImage = 'url("https://w0.peakpx.com/wallpaper/395/226/HD-wallpaper-world-map-world-worldview-flags-map.jpg")'
                // classesEasy = easyCountries
                // classesMedium = mediumCountries
                // classesHard = hardCountries
                // classesExpert = expertFootball

            } else if (radio.value == "jungle") {
                body.style.backgroundImage = 'url("https://thumbs.dreamstime.com/b/deep-jungle-southeast-asia-dense-vegetation-southeast-asian-deep-jungle-128947163.jpg")'
                // classesEasy = easyJungle
                // classesMedium = mediumJungle
                // classesHard = hardJungle
                // classesExpert = expertJungle
            } else {
                body.style.backgroundImage = 'url("https://www.bestfunquiz.com/docs/14317992.jpg")'
                // classesEasy = easyPersonalities
                // classesMedium = mediumPersonalities
                // classesHard = hardPersonalities
                // classesExpert = expertPersonalities
            }

        })
    })
}
changerSubjectRadios()


//CALCULATEPOINTS() OUTSIDE START GAME()

let changeScore=false;
const calculatePoints=(point)=>{
    
    let points = document.getElementsByClassName("spanPoints")[0];
    //    let addingPoints=false;
       new Promise((resolve,reject)=>{
        
       let addedPoint= JSON.parse(localStorage.getItem('score'));
        let totalPoints = addedPoint + point
        JSON.stringify(localStorage.setItem("score",totalPoints))
        localStorage.setItem("score",totalPoints)
        
        let addPoints = setInterval(() => {
            
            if (point > 0) {
                if (addedPoint < totalPoints) {
                    // console.log(addedPoint + " " + point + " " + points.innerHTML)
                    addedPoint+=10
                    // changeScore=true
                    
                    // addingPoints=true;
                
                    
                    points.innerHTML = addedPoint

                } else {
               
                    clearInterval(addPoints)
                }
            } else {
                if (addedPoint > totalPoints) {
                    
                    addedPoint--
                    points.innerHTML = addedPoint
                }

            }
           
        }, 2)

        

        

          
    })
    

    };
    function soundChangeScore(time){
     
            console.log(changeScore)
            let sound=play("/Memory-Game/sounds/score.mp3",0.2)
            sound.loop=true
           setTimeout(()=>{
            sound.pause()
           },time)
                    
    }

    window.addEventListener('resize',()=>{
        if(GameSettings.difficultyChoice=="hard"){
            if(window.innerWidth<=720){
                GameSettings.boardRows =10
                GameSettings.boardColumns = 5
              

               
        }else{
           GameSettings.boardRows =5
           GameSettings.boardColumns = 10
        }
        

        updateGameGridStructure(GameSettings.boardRows, GameSettings.boardColumns);  

        }

        if(GameSettings.difficultyChoice=="expert"){
            if(window.innerWidth<=720){
                GameSettings.boardRows =12
                GameSettings.boardColumns = 7
              

               
        }else{
           GameSettings.boardRows =6
           GameSettings.boardColumns = 14
        }
        

        updateGameGridStructure(GameSettings.boardRows, GameSettings.boardColumns);  

        }
         
    })

    function updateGameGridStructure(rows, columns) {
        // console.log(rows+" "+columns)
        // const cardsArray=Array.from(document.querySelectorAll('.card'))


        // rowsArray.forEach(row=>{
        //         game.removeChild(row)
        // })

        // for(let i=0;i<rows;i++){
        //     for(let j=0;j<columns;j++){
        //        let card=cardsArray.shift();
        //        console.log(card)
        //         game.appendChild(card)
        //     }
        //  }

        const cardsArray = Array.from(document.querySelectorAll('.card'));
        console.log("Cards ARRAY")
        if((cardsArray!=null ||cardsArray!=undefined)&&window.innerWidth<=720&&window.innerWidth>=440 ){
            cardsArray.forEach(card=>{
                     card.style.height="6.5vh"; 
            })  
        }else if(window.innerWidth<=440 && window.innerWidth>=370){
            cardsArray.forEach(card=>{
                     card.style.height="6.5vh";
            })  
        }else{
            cardsArray.forEach(card=>{
                    card.style.height="auto";
                
            })
        }
        // Calculate the total number of cells in the grid
        const totalCells = rows * columns;
    
        // Remove any excess cards from the grid
        while (cardsArray.length > totalCells) {
            cardsArray.pop();
        }
    
        // Remove all rows from the game container
        Array.from(game.querySelectorAll('.row')).forEach(row => {
            game.removeChild(row);
        });
    
        // Create and append new rows to the game container
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
    
            // Distribute cards to columns
            for (let j = 0; j < columns; j++) {
                const card = cardsArray.shift();
                row.appendChild(card);
            }
    
            game.appendChild(row);
        }
        


       
    }
       
       


 
        ///ANIMATION NEW INTOTO THE SCRIPT
        function createStars(count) {
            console.log("runstarts functions")
            for (let i = 0; i < count; i++) {
                let star = document.createElement("div");
                star.classList.add("star");
                star.style.left = Math.random() * window.innerWidth + "px";
                star.style.top = Math.random() * window.innerHeight + "px";
                star.style.animationDelay = Math.random() * 3 + "s";
                star.style.width = star.style.height = (Math.random() * 3 + 2) + "px";
                document.body.appendChild(star);
            }
        }
    
    
        function createBubbles(count) {
            console.log("run bubble functions")
            for (let i = 0; i < count; i++) {
                let bubble = document.createElement("div");
                bubble.classList.add("bubble");
                bubble.style.left = Math.random() * window.innerWidth + "px";
                bubble.style.bottom = "-10px";
                bubble.style.animationDuration = (Math.random() * 3 + 3) + "s";
                bubble.style.animationDelay = Math.random() * 5 + "s";
                bubble.style.width = bubble.style.height = (Math.random() * 20 + 5) + "px";
                document.body.appendChild(bubble);
            }
        }
    
        function createSandstorm(count) {
            console.log("run sand functions")
            for (let i = 0; i < count; i++) {
                let particle = document.createElement("div");
                particle.classList.add("sand-particle");
                particle.style.left = Math.random() * window.innerWidth + "px";
                particle.style.top = Math.random() * window.innerHeight + "px";
                particle.style.animationDuration = (Math.random() * 3 + 2) + "s";
                particle.style.animationDelay = Math.random() * 3 + "s";
                document.body.appendChild(particle);
            }
        }
    
    
        function createMagicParticles(count) {
            console.log("run magic particles functions")
            for (let i = 0; i < count; i++) {
                let particle = document.createElement("div");
                particle.classList.add("magic-particle");
                particle.style.left = Math.random() * window.innerWidth + "px";
                particle.style.top = Math.random() * window.innerHeight + "px";
                particle.style.animationDelay = Math.random() * 3 + "s";
                document.body.appendChild(particle);
            }
        }
    
        function createRain(count) {
            console.log("run rain functions")
            for (let i = 0; i < count; i++) {
                let drop = document.createElement("div");
                drop.classList.add("raindrop");
                drop.style.left = Math.random() * window.innerWidth + "px";
                drop.style.top = Math.random() * -100 + "px";
                drop.style.animationDuration = (Math.random() * 1.5 + 0.5) + "s";
                drop.style.animationDelay = Math.random() * 2 + "s";
                document.body.appendChild(drop);
            }
        }
    
    
        function createSnowflakes() {
            console.log("run snow flakes functions")
            const snowContainer = document.body;
            for (let i = 0; i < 180; i++) {  // Increased number of snowflakes
                let snowflake = document.createElement("div");
                snowflake.classList.add("snowflake");
                let size = Math.random() * 6 + 2;
                let duration = Math.random() * 8 + 3; // More variation in animation duration
                snowflake.style.width = `${size}px`;
                snowflake.style.height = `${size}px`;
                snowflake.style.left = `${Math.random() * 100}vw`;
                snowflake.style.animationDuration = `${duration}s`;
                snowflake.style.animationDelay = `${Math.random() * 5}s`;
                snowflake.style.opacity = Math.random() * 0.6 + 0.4; // Varying opacity
                snowContainer.appendChild(snowflake);
            }
        }


        function randomBackground(backgroundName){
    
            console.log(backgroundName)
          
        
        
            let randomNum= Math.floor(Math.random()*backgroundTemplates.length)
             body.style.backgroundImage = `url(${backgroundTemplates[randomNum].pic})`
             let templateName = backgroundName == undefined ? backgroundTemplates[randomNum].name :backgroundName
         
             switch (templateName) {
                 case "forest":
                     createMagicParticles(300);
                     break;
                 case "pyramid":
                     createSandstorm(1500);
                     break;
                 case "bigben":
                     createRain(150);
                     break;
                 case "space":
                     createStars(350);
                     break;
                 case "north-pole":
                     createSnowflakes();
                     break;
                 case "underwater":
                     createBubbles(30);
                     break;
                 default:
                     console.log("No matching background found.");
             }
             return templateName;
         }
    
     
    

    // tableResizing=()=>{
    //     window.onresize=()=>{
    //         GameSettings.screenResizing=true;
    //         if(window.innerWidth<=720){
    //             GameSettings.boardRows =12
    //             GameSettings.boardColumns = 7
            
    //     }
    //     console.log(GameSettings.boardRows+" "+GameSettings.boardColumns)
    //     }
        

    // }
    // tableResizing();

//WHEN PUSH THE START GAME
startGame = () => {

    //**************************************************************

    console.log("Game begun")
    gamePaused = false
    //clean the board after restart
    game.style.display="block"
    document.getElementById("card-background").replaceChildren(); //
    document.getElementById("message").style.display="none"
    localStorage.setItem("score",0)
    body.style.backgroundColor="transparent"
    
    const elementsToRemove = document.querySelectorAll('.star, .snowflake, .magic-particle, .sand-particle, .bubble,.raindrop');
    
    // Loop through the selected elements and remove each one
    elementsToRemove.forEach(element => {
        console.log(element +"removed")
      element.remove();
    });
    
    
    
    randomBackground()


    /********************************************************************* */
    backgroundMusic.pause();

    document.getElementById("message").innerHTML=""
//    play("/sounds/mainMusic.mp3",0.5)
    pauseBtn.style.display="block";
    gamePreferences.style.display = "none";
    play("/Memory-Game/sounds/menu-button.mp3", 1)
    // console.log(starterMusic)
    backgroundMusic.pause();


    if (document.getElementById("message").innerHTML.length > 0) {
        startGame()
    } else {

        startBtn.removeEventListener("click", startGame);
        startBtn.innerHTML = "Start";
        //START GAME FROM PAUSE
        if (game.classList.contains("disable")) {
            game.classList.remove("disable");
            active = true
            clock(active);
        } else {
            //START GAME 

            //DISSAPEAR THE PREFERENCES
            choices.style.display = "none"





            GameSettings.difficultyChoice = document.querySelector('input[name="difficulty"]:checked').value
            GameSettings.subjectChoice = document.querySelector('input[name="subject"]:checked').value


            let rows, columns
            function findRowColumns() {
                if (GameSettings.difficultyChoice == "easy") {
                    GameSettings.boardRows = 4
                    GameSettings.boardColumns = 4
                } else if (GameSettings.difficultyChoice == "medium") {
                    

                    GameSettings.boardRows = 5
                    GameSettings.boardColumns = 6

                } else if (GameSettings.difficultyChoice == "hard") {
                    if(window.innerWidth<=720){
                        GameSettings.boardRows = 10
                        GameSettings.boardColumns = 5
                       }else{
                        GameSettings.boardRows = 5
                        GameSettings.boardColumns = 10
                       }
                   
                    
                    // classes = classesHard
                } else {
                   if(window.innerWidth<=720){
                    GameSettings.boardRows =12
                    GameSettings.boardColumns = 7
                   }else{
                    GameSettings.boardRows =6
                    GameSettings.boardColumns = 14
                   }

                }


            }

           
            findRowColumns()
            createBoard();

            


            function createBoard() {
                play("/Memory-Game/sounds/game-start.mp3", 1);
                const statsFragment =document.createDocumentFragment()
                let resDiv = document.createElement("div");
                resDiv.id = "results"
                let pPoints = document.createElement("p")
                let pMoves = document.createElement("p")
                let pTime = document.createElement("p");

                ////CREATE SPAN TO THE DOCUMENT
                let spanPoints = document.createElement("span")
                spanPoints.className = "spanPoints";
                let spanPointsText = document.createTextNode("0")
                spanPoints.appendChild(spanPointsText)
                let spanMoves = document.createElement("span")
                spanMoves.className = "spanMoves";
                let spanmovesText = document.createTextNode("0")
                spanMoves.appendChild(spanmovesText);
                let spanTime = document.createElement("span")
                spanTime.id = "time"
                let spanTimeText = document.createTextNode(":");


                let spanMinutes = document.createElement("span");
                let spanSeconds = document.createElement("span");
                let spanMinutesText = document.createTextNode("00")
                let spanSecondsText = document.createTextNode("00")
                spanMinutes.appendChild(spanMinutesText)
                spanSeconds.appendChild(spanSecondsText)
                spanMinutes.id = "sMin"
                spanSeconds.id = "sSec"
                spanTime.appendChild(spanMinutes)
                spanTime.appendChild(spanTimeText)
                spanTime.appendChild(spanSeconds)

                /******************************************************************8 */
                let textPoints = document.createTextNode("Points: ")
                let textMoves = document.createTextNode("Moves: ");
                let textTime = document.createTextNode("Time: ");
                pPoints.appendChild(textPoints);
                pPoints.appendChild(spanPoints);
                pMoves.appendChild(textMoves);
                pMoves.appendChild(spanMoves);
                pTime.appendChild(textTime)
                pTime.appendChild(spanTime)
                resDiv.appendChild(pPoints)
                resDiv.appendChild(pMoves)
                resDiv.appendChild(pTime)
                statsFragment.appendChild(resDiv)
                game.appendChild(resDiv);


                const cardFragment = document.createDocumentFragment();

                for (i = 0; i < GameSettings.boardRows; i++) {

                    let div = document.createElement("div");
                    div.className = "row";
                    for (j = 0; j < GameSettings.boardColumns; j++) {
                        let cardDiv = document.createElement("div")
                        cardDiv.className = "card";
                        if(GameSettings.difficultyChoice=="expert"&& window.innerWidth<=720 && window.innerWidth>=440){
                            console.log("fuck you fro start")
                             cardDiv.style.height="6.5vh";
                        }
                        if(GameSettings.difficultyChoice=="hard"&& window.innerWidth<=440 && window.innerWidth>=370){
                            console.log("fuck you fro start")
                             cardDiv.style.height="6.5vh";
                        }

                        let contentDiv = document.createElement("div");
                        contentDiv.className = "content"
                        let frontDiv = document.createElement("div");
                        frontDiv.className = "front";

                        let backDiv = document.createElement("div");
                        backDiv.className = "back"
                        contentDiv.appendChild(frontDiv)
                        contentDiv.appendChild(backDiv)
                        cardDiv.appendChild(contentDiv)
                        div.appendChild(cardDiv);
                        // cardFragment.appendChild(div)
                    }
                   
                    cardFragment.appendChild(div)
                    // game.appendChild(cardFragment)

                }
                game.appendChild(cardFragment)
            }




            //COUNTER
            active = true;

            clock(active);

            //***********************************************************************************************


            //choose random values for cards

            function setTheGame(type, difficulty) {
                console.log(type)
                let usedArray = footballArray
                if (type == "countries") {
                    Array.from(fronts).forEach((front) => {
                        front.style.backgroundImage = "url('https://static01.nyt.com/images/2016/05/03/world/what-in-the-world/WITW-PROMO/WITW-PROMO-videoSixteenByNineJumbo1600.jpg')"
                        usedArray = countriesArray
                    })
                } else if (type == "jungle") {
                    Array.from(fronts).forEach((front) => {
                        front.style.backgroundImage = "url('https://www.citypng.com/public/uploads/preview/wild-animals-zoo-badge-transparent-background-11582128549srkj07rmqg.png')"
                        usedArray = jungleArray
                        console.log(usedArray)
                    })
                } else if (type == "personalities") {
                    Array.from(fronts).forEach((front) => {
                        front.style.backgroundImage = "url('/Memory-Game/images/personalitiesCardFront.png')"
                        usedArray = personalitiesArray

                    })
                }

                let numberOfElements = findTheNumberOfCards(difficulty);
                console.log(usedArray)
                let gameArray = selectRandomValues(usedArray, numberOfElements);
                let finalArray = duplicateTheValues(gameArray)
                console.log(finalArray)
                return finalArray
            }


            function findTheNumberOfCards(difficulty) {
                let numberOfElements
                if (difficulty == "easy") {
                    numberOfElements = 8;
                } else if (difficulty == "medium") {
                    numberOfElements = 15;
                } else if (difficulty == "hard") {
                    numberOfElements = 25
                } else {
                    console.log(difficulty);
                    numberOfElements = 42
                }
                return numberOfElements
            }

            function selectRandomValues(type, numberOfElements) {
                console.log(numberOfElements)
                let gameArray = [];
                let randomElement
                for (let i = 0; i < numberOfElements; i++) {
                    randomElement = type[Math.floor(Math.random() * type.length)];
                    if (!gameArray.includes(randomElement)) {
                        gameArray[i] = randomElement

                    }
                    else {
                        i -= 1;
                    }
                }

                return gameArray
            }


            function duplicateTheValues(gameArray) {
                finalArray = [...gameArray, ...gameArray];
                finalArray.sort(function () {
                    return Math.random() - 0.5;
                })

                return finalArray;

            };


            //THE LAST ARRAY WHICH CREATED FROM THE SELECTION CHOICES
            let finalGameArray = setTheGame(GameSettings.subjectChoice, GameSettings.difficultyChoice)
           



            //PLACE RANDOM THE VALUES OF THE ARRAY TO THE CARDS
            const cards = document.getElementsByClassName("card");
            let clickedCard = null;
            let tries = 0;
            let span = document.querySelector(".spanMoves");
            // let points = document.getElementsByClassName("spanPoints")[0];

                
            
            // const calculatePoints=(point)=>{
            // //    let addingPoints=false;
            //    new Promise((resolve,reject)=>{
            //    let addedPoint= JSON.parse(localStorage.getItem('score'));
            //     let totalPoints = addedPoint + point
            //     JSON.stringify(localStorage.setItem("score",totalPoints))
            //     localStorage.setItem("score",totalPoints)
                
            //     let addPoints = setInterval(() => {
            //         if (point > 0) {
            //             if (addedPoint < totalPoints) {
            //                 // console.log(addedPoint + " " + point + " " + points.innerHTML)
            //                 addedPoint+=10
            //                 // addingPoints=true;
                            
            //                 points.innerHTML = addedPoint

            //             } else {
            //                 addingPoints=false;
            //                 console.log(points.innerHTML)
            //                 clearInterval(addPoints)
            //             }
            //         } else {
            //             if (addedPoint > totalPoints) {
            //                 addedPoint--
            //                 points.innerHTML = addedPoint
            //             }

            //         }
            //     }, 1)

                  
            // })
        
            // };

        

            function placeTeamRandom(card) {
                console.log(finalGameArray)
     
                let randomTeam = finalGameArray[Math.floor(Math.random() * finalGameArray.length)]
                let back = card.querySelector('.back');
                let front = card.querySelector(".front")
                back.classList.add(randomTeam.pic);
                front.dataset.team = randomTeam.name;
                let randomTeamIndex = finalGameArray.indexOf(randomTeam)
                finalGameArray.splice(randomTeamIndex, 1);
                
            }


            Array.from(cards).forEach((card) => {
                

                placeTeamRandom(card)


                //INSTRUCTIONS AND SELECTIONS TO THE GAME
                card.addEventListener("click", (e) => {

                    play("/Memory-Game/sounds/flipcard.mp3", 1);
                    // console.log(e.target);
                    let child = card.querySelector('.content')
                    let front = card.querySelector(".front")
                    let back=card.querySelector(".back")

                    if (!clickedCard) {
                        Array.from(cards).forEach((card) => {
                            // card.classList.remove("disable");
                            card.classList.remove("wrong");
                        })
                        let target = e.currentTarget;
                        child.classList.add("contentActive")
                        card.classList.add("disable")
                        clickedCard = target
                        console.log(clickedCard)


                    } else
                        if (clickedCard) {
                            Array.from(cards).forEach((card) => {
                                card.classList.add("disable");
                            })

                            child.classList.add("contentActive")
                            if (front.getAttribute('data-team') == clickedCard.querySelector(".front").getAttribute("data-team") && !clickedCard.classList.contains("disabled")) {
                                const item=new Object({
                                    image:clickedCard.querySelector('.back').classList[1],
                                    name:clickedCard.querySelector(".front").getAttribute("data-team")
                                })
                                bonusGameArray.push(item)
                                console.log(bonusGameArray)
                                // console.log(front.getAttribute('data-team') + " " + clickedCard.querySelector(".front").getAttribute("data-team"));
                                // console.log(true)
                                // calculatePoints(1000)
                            soundChangeScore(1000);
                                if(foundedInARow<0){
                                    foundedInARow=1;
                                }else{
                                    foundedInARow++
                                }
                                
                                calculatePoints(500);
                                // play("/sounds/score.mp3")
                                // console.log(points.innerHTML)
                                span.innerHTML = ++tries;

                                card.classList.add("founded")
                                clickedCard.classList.add("founded")
                                foundedPar.style.display = "block";
                                foundedPar.innerHTML = front.getAttribute('data-team')
                                // foundedPar.classList.add("animate__zoomIn")
                                foundedPar.classList.add('textAnimation')
                                card.classList.add("explode")
                                clickedCard.classList.add("explode")

                                clickedCard = null;
                                if (foundedInARow == 3) {
                                    calculatePoints(1000)
                                    baby.style.backgroundImage="url('./images/baby.png')"
                                    baby.classList.add("babyAnimation")



                                }

                                if (foundedInARow > 3 && foundedInARow <= 5) {
                                    calculatePoints(3000)
                                    foundedPar.innerHTML = "UNSTOPPABLE";

                                    body.classList.add("unstoppable_animation");
                                }

                                if (foundedInARow == 6) {
                                    calculatePoints(5000)
                                    body.classList.add("godlike")
                                    game.style.display = "none"
                                    foundedPar.innerHTML = "GODLIKE";
                                    // body.style.background='url("/images/god.png")no-repeat fixed center center'
                                }
                                if (foundedInARow >= 7) {
                                    calculatePoints(10000)
                                    body.classList.remove("bodyBackground")
                                    // body.style.backgroundImage="url('/images/heaven.jpg')"
                                    // body.style.backgroundRepeat="no-repeat"
                                  initialBonusArray=[...bonusGameArray];
                                    body.classList.add("heavenBackground")
                                    body.classList.add("heaven_animation")
                                    // bonusGame();

                                    game.style.display = "none"
                                    play("/Memory-Game/sounds/heaven.mp3",1)
                                    foundedPar.innerHTML = "WELCOME HOME GOD";
                                }
                                setTimeout(() => {
                                    play("/Memory-Game/sounds/correct.mp3",1)
                                    if (foundedInARow == 3) {
                                        play("/Memory-Game/sounds/YES.mp3",1)

                                    }
                                    if (foundedInARow > 3 && foundedInARow <= 5) {

                                        play("/Memory-Game/sounds/UNSTOPPABLE.mp3",1)



                                    }
                                    if (foundedInARow >= 6) {
                                        play("/Memory-Game/sounds/god-like.mp3",1)
                                    }

                                }, 350);
                                setTimeout(() => {
                                    // play("/sounds/correct.mp3")
                                    foundedPar.innerHTML = "";
                                    // foundedPar.classList.remove("animate__zoomIn")
                                    foundedPar.classList.remove('textAnimation')
                                    body.classList.remove("unstoppable_animation");
                                    foundedPar.style.display = "none";
                                    baby.classList.remove("babyAnimation")
                                    changeScore=false;
                                }, 1200);
                                setTimeout(() => {
                                    baby.classList.remove("babyAnimation")
                                }, 1500);

                                if (body.classList.contains("godlike")) {
                                    setTimeout(() => {
                                        body.classList.remove("godlike")
                                        game.style.display = "block"
                                        foundedPar.innerHTML = "";
                                        // body.style.background='url("https://i.pinimg.com/736x/41/b7/07/41b707b7632118fd15807ed0bc9c85bc.jpg") no-repeat fixed center center'
                                    }, 3000);
                                }
                                if (body.classList.contains("heaven_animation")) {
                                    // body.classList.add('mini-game-animation')
                                    setTimeout(() => {
                                        body.classList.remove("heaven_animation")

                                        foundedPar.innerHTML = "";
                                        body.classList.add("bodyBackground")
                                        // body.classList.remove("heavenBackground")
                                        body.classList.add("mini-game-animation");
                                        miniGame.style.display = "flex"
                                    }, 8000);
                                }




                                Array.from(cards).forEach((card) => {
                                    let child = card.querySelector('.content')
                                    if (!child.classList.contains('contentActive')) {
                                        card.classList.remove("disable");
                                    }
                                })

                                filterArray = Array.from(cards).filter(foundedCards)
                                function foundedCards(card) {
                                    return !(card.classList.contains("founded"))

                                }

                                function endGame() {
                                    setTimeout(() => {
                                        if (filterArray.length == 0) {
                                            /***************************************** */
                                            console.log("REMOVED THE CHILDS")
                                            while(game.firstChild){
                                                console.log("REMOVED THE CHILDS ONE BY ONE")
                                                game.removeChild(game.firstChild);
                                            }
                                            /**************************************** */
                                            startBtn.addEventListener("click", startGame)
                                            pauseBtn.style.display="none";
                                            game.style.display = "none";
                                            document.getElementById("message").style.display = "block";
                                            play("/Memory-Game/sounds/successWin.mp3", 1)
                                            document.getElementById("message").innerHTML = "Congratulations you won at " + tries + " moves with "+JSON.parse(localStorage.getItem('score'))+" points";
                                            console.log(difficultyChoice)
                                            // startBtn.addEventListener("click", startGame)
                                            startBtn.style.display="none"
                                        }


                                    }, 1500)
                                }
                                endGame()


                            } else {
                                if(foundedInARow>0){
                                foundedInARow = -1;
                                calculatePoints(-15)
                                // console.log(e.target + " " + clickedCard)
                                // console.log(e.target.getAttribute('data-team') + " " + clickedCard.getAttribute("data-team"));
                                console.log(false)

                                span.innerHTML = ++tries;
                                setTimeout(() => {
                                    card.classList.add("wrong")
                                    clickedCard.classList.add("wrong")
                                    play("/Memory-Game/sounds/error-sound.mp3",1)
                                    child.classList.remove("contentActive")
                                    clickedCard.querySelector(".content").classList.remove('contentActive')
                                    Array.from(cards).forEach((card) => {
                                        card.classList.remove("disable");
                                    })


                                    clickedCard = null;
                                }, 1000)
                            }else{
                                foundedInARow--;
                                calculatePoints(-15)
                            
                                


                                span.innerHTML = ++tries;
                                setTimeout(() => {
                                    card.classList.add("wrong")
                                    clickedCard.classList.add("wrong")
                                    play("/Memory-Game/sounds/error-sound.mp3",1)
                                    child.classList.remove("contentActive")
                                    clickedCard.querySelector(".content").classList.remove('contentActive')
                                    
                                    Array.from(cards).forEach((card) => {
                                        card.classList.remove("disable");
                                    })


                                    clickedCard = null;
                                }, 1000)
                                if(foundedInARow<=-5&&foundedInARow%5==0){
                                    console.log(foundedInARow)
                                    play("/Memory-Game/sounds/wahTrumpet.mp3",1)
                                    baby.style.backgroundImage="url('/Memory-Game/images/confusedBaby.png')"

                                    calculatePoints(-1000)
                                    baby.classList.add("babyAnimation")
                                }
                                setTimeout(() => {
                                    // play("/sounds/correct.mp3")
                                    foundedPar.innerHTML = "";
                                    // foundedPar.classList.remove("animate__zoomIn")
                                    foundedPar.classList.remove('textAnimation')
                                    body.classList.remove("unstoppable_animation");
                                    foundedPar.style.display = "none";
                                    baby.classList.remove("babyAnimation")
                                }, 1200);
                                
                            }









                            }



                        }

                })



            })


        }
    }
}



pauseGame = () => {
    play("/Memory-Game/sounds/menu-button.mp3", 1)
    gamePaused = true;
    startBtn.innerHTML = "Continue";
    startBtn.addEventListener('click', startGame)
    game.classList.add("disable");
    active = false;
    clock(active)
}


resetGame = () => {
    play("/Memory-Game/sounds/menu-button.mp3", 1)
    gamePaused=false
    document.location.reload(true);
}


//BONUS GAME


let countDown=document.getElementById("countDown");
let numberDisplay=document.getElementById("numberSquare")
let activeBonus=false;








startBonusGame=()=>{
    activeBonus=true
  
   
   let sound=play("/Memory-Game/sounds/HeavenMain.mp3",1)
   let bonusScore=0;
   bonusBtn.style.display="none"
   countDown.style.display="flex";
   
   
    let item;
    function newImage(){
        if(initialBonusArray.length>0){
    item=initialBonusArray[Math.floor(Math.random() * initialBonusArray.length)]
    document.getElementById("bonus-image").classList.add(item.image)
        }else{
            endBonusGame(sound,bonusScore)
            console.log(bonusGameArray)

        }
            
                    
        
    }
    
    newImage();
   
    bonusInput.addEventListener("input",(event)=>{
        // console.log(event.target)
        // console.log(event.target.value)
        // console.log(bonusGameArray)
        console.log(item)
        if(event.target.value==item.name){
            console.log(true);
            bonusScore+=8000
            bonusMsg.style.display="block"
            bonusMsg.innerHTML="+8000"
            bonusMsg.classList.add("textAnimation")
            bonusInput.style.border="5px solid green";
            const index = initialBonusArray.indexOf(item);
            if (index > -1) { // only splice array when item is found
                initialBonusArray.splice(index, 1); // 2nd parameter means remove one item only
            }
            setTimeout(()=>{
                play("/Memory-Game/sounds/correct.mp3",1)
                bonusInput.style.border="5px solid transparent";
                bonusInput.value="";
                document.getElementById("bonus-image").classList.remove(item.image)
              
                newImage()
            
               
        },500)

        setTimeout(()=>{
            bonusMsg.style.display="none";
            bonusMsg.classList.remove("textAnimation")
            bonusMsg.innerHTML=""
        },1200)
    }
        
    
       

        
    })

    
    countDownActivated(sound,bonusScore)
   
   

}


function countDownActivated(sound,bonusScore){
    intervalId= setInterval(() => {
        if(!activeBonus){
            clearInterval(intervalId)
        }else{
        let parsedNumber = parseInt(numberDisplay.innerHTML);
        parsedNumber -= 1
        if(parsedNumber<=3){
            numberDisplay.style.color="red";
        }
        if (parsedNumber < 0) {
            numberDisplay.innerHTML = 0;
            numberDisplay.style.color="white"
            inactive(intervalId);
            endBonusGame(sound,bonusScore);
            

        } else {
            
            countDown.style.setProperty('--animationToPseudoElement', 'rotate 1s linear infinite')
            numberDisplay.innerHTML = parsedNumber
        }
    }

    }, 1000)

}

function inactive(intervalId){
    countDown.style.setProperty('--animationToPseudoElement', 'none');
    clearInterval(intervalId);
}


function endBonusGame(sound,bonusScore){
            sound.pause();
            let godSound=play("/Memory-Game/sounds/godSound.mp3",1)
            activeBonus=false;
            body.classList.add("miniGameFinished")
            body.classList.add("bodyBackground")
            godMsg.style.display="block";
            godMsg.classList.add("textAnimation")
            godMsg.innerHTML="Time To Return Earth Memory-God"
            miniGame.style.display="none";
            bonusBtn.style.display="block"
            countDown.style.display="none";
            document.getElementById("bonus-image").classList.remove(...document.getElementById("bonus-image").classList)
            numberDisplay.innerHTML="59"

            setTimeout(()=>{
                
                godSound.pause();
                body.classList.remove("miniGameFinished")
                body.classList.remove("heavenBackground")
                godMsg.classList.remove("textAnimation")
                godMsg.style.display="none";
                // body.classList.add("bodyBackground")
                
                body.classList.remove('mini-game-animation')
                
                game.style.display="block";
                
            },5000)
            setTimeout(()=>{
                calculatePoints(bonusScore)
                if(bonusScore>0){
                let sound=play("/Memory-Game/sounds/score.mp3",0.2)
                sound.loop=true
               setTimeout(()=>{
                sound.pause()
               },6000)
            }
                    
                
                
                
            },6000)
}




bonusBtn.addEventListener("click",startBonusGame)
pauseBtn.addEventListener("click", pauseGame)
startBtn.addEventListener("click", startGame)
resetBtn.addEventListener("click", resetGame)