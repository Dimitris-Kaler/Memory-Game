

const body=document.getElementsByTagName("body")[0];
const choices = document.getElementById("choices");
const gamePreferences = document.getElementById("game-preferences");
const startBtn = document.getElementById("start-game");
const pauseBtn = document.getElementById('pause-game');
const resetBtn = document.getElementById("reset")
let game = document.getElementById("game");
let starterMusic;
let timeOfFounds;
let fronts = document.getElementsByClassName("front");
let backs = document.getElementsByClassName("back");


let leftArrow=document.getElementById("left-arrow")
let rightArrow=document.getElementById("right-arrow");


leftArrow.addEventListener("click",()=>{
    choices.style.transform="translateX(-75%)"
})

rightArrow.addEventListener("click",()=>{
    choices.style.transform="translateX(0%)"
})

///Arrays for quizzes
//Football
//Easy
let easyFootball=["real", "real", "barcelona", "barcelona", "juve", "juve", "manunited", 
"manunited", "liverpool", "liverpool", "milan", "milan", "inter", "inter", "bayern", "bayern"]
let mediumFootball=["real", "real", "barcelona", "barcelona", "juve", "juve", "manunited", "manunited", "liverpool", "liverpool", "milan", "milan", "inter", "inter", "bayern", "bayern",
"chelsea", "chelsea", "dortmund", "dortmund", "atletico", "atletico", "porto", "porto", "ajax", "ajax", "benfica", "benfica", "arsenal", "arsenal"]
let hardFootball=["real", "real", "barcelona", "barcelona", "juve", "juve", "manunited", "manunited", "liverpool", "liverpool", "milan", "milan", "inter", "inter", "bayern", "bayern",
"chelsea", "chelsea", "dortmund", "dortmund", "atletico", "atletico", "porto", "porto", "ajax", "ajax", "benfica", "benfica", "arsenal", "arsenal",
"psg", "psg", "pao", "pao", "osfp", "osfp", "dinamo", "dinamo", "city", "city", "marseille", "marseille", "galata", "galata", "celtic", "celtic", "rangers", "rangers", "anderlecht", "anderlecht"]
let expertFootball=["real", "real", "barcelona", "barcelona", "juve", "juve", "manunited", "manunited", "liverpool", "liverpool", "milan", "milan", "inter", "inter", "bayern", "bayern",
"chelsea", "chelsea", "dortmund", "dortmund", "atletico", "atletico", "porto", "porto", "ajax", "ajax", "benfica", "benfica", "arsenal", "arsenal",
"psg", "psg", "pao", "pao", "osfp", "osfp", "dinamo", "dinamo", "city", "city", "marseille", "marseille", "galata", "galata", "celtic", "celtic", "rangers", "rangers", "anderlecht", "anderlecht",
"aek", "aek", "lyon", "lyon", "eindhoven", "eindhoven", "napoli", "napoli", "leverkusen", "leverkusen", "leipzig", "leipzig", "roma", "roma", "valencia", "valencia", "fener", "fener", "feyen", "feyen",
"zvezda", "zvezda", "monaco", "monaco", "totthenham", "totthenham", "rosenborg", "rosenborg", "lazio", "lazio", "sparta", "sparta", "spartak", "spartak"]
let easyCountries=["greece","greece","germany","germany","italy","italy","france","france","usa","usa","spain","spain","russia","russia","china","china"]
let mediumCountries=["greece","greece","germany","germany","italy","italy","france","france","usa","usa","spain","spain","russia","russia","china","china",
"brazil","brazil","portugal","portugal","norway","norway","turkey","turkey","southafrica","southafrica","saudi","saudi","grbritain","grbritain"]
let hardCountries=["greece","greece","germany","germany","italy","italy","france","france","usa","usa","spain","spain","russia","russia","china","china",
"brazil","brazil","portugal","portugal","norway","norway","turkey","turkey","southafrica","southafrica","saudi","saudi","grbritain","grbritain",
"sweden","sweden","finland","finland","denmark","denmark","argentina","argentina","japan","japan","cuba","cuba","newzeeland","newzeeland","mexico","mexico","chile","chile","canada","canada"]
let easyJungle=["lion","lion","tiger","tiger","elephant","elephant","parrot","parrot","bear","bear","hippo","hippo","monkey","monkey","snake","snake"]
let mediumJungle=["lion","lion","tiger","tiger","elephant","elephant","parrot","parrot","bear","bear","hippo","hippo","monkey","monkey","snake","snake",
"lemur","lemur","gorilla","gorilla","tapir","tapir","armadillo","armadillo","giraffe","giraffe","leopard","leopard","wolf","wolf"];
let hardJungle=["lion","lion","tiger","tiger","elephant","elephant","parrot","parrot","bear","bear","hippo","hippo","monkey","monkey","snake","snake",
"lemur","lemur","gorilla","gorilla","tapir","tapir","armadillo","armadillo","giraffe","giraffe","leopard","leopard","wolf","wolf",
"fox","fox","goose","goose","deer","deer","kangaroo","kangaroo","spider","spider","turtle","turtle","camel","camel","frogey","frogey","lizard","lizard","rabbit","rabbit"];
let expertJungle=["lion","lion","tiger","tiger","elephant","elephant","parrot","parrot","bear","bear","hippo","hippo","monkey","monkey","snake","snake",
"lemur","lemur","gorilla","gorilla","tapir","tapir","armadillo","armadillo","giraffe","giraffe","leopard","leopard","wolf","wolf",
"fox","fox","goose","goose","deer","deer","kangaroo","kangaroo","spider","spider","turtle","turtle","camel","camel","frogey","frogey","lizard","lizard","rabbit","rabbit",
"crocodile","crocodile","goat","goat","bull","bull","horse","horse","whiteHorse","whiteHorse","hedgehog","hedgehog","kitten","kitten","polarBear","polarBear",
"mamba","mamba","labradorDog","labradorDog","mouse","mouse","whiteDuck","whiteDuck","anteater","anteater","duck","duck","blackPanther","blackPanther","jaguar","jaguar","pitbull","pitbull"];
let easyPersonalities=["hitler","hitler","stalin","stalin","lenin","lenin","churchill","churchill","motherTeresa","motherTeresa","einstein","einstein","gandhi","gandhi","lama","lama"]
let mediumPersonalities=["hitler","hitler","stalin","stalin","lenin","lenin","churchill","churchill","motherTeresa","motherTeresa","einstein","einstein","gandhi","gandhi","lama","lama",
"aristotle","aristotle","beethoven","beethoven","elizabeth","elizabeth","marx","marx","licoln","licoln","napoleon","napoleon","newton","newton"]
let hardPersonalities=["hitler","hitler","stalin","stalin","lenin","lenin","churchill","churchill","motherTeresa","motherTeresa","einstein","einstein","gandhi","gandhi","lama","lama",
"aristotle","aristotle","beethoven","beethoven","elizabeth","elizabeth","marx","marx","licoln","licoln","napoleon","napoleon","newton","newton",
"alexander","alexander","tesla","tesla","mandela","mandela","shakespeare","shakespeare","che","che","chaplin","chaplin","curie","curie","luther","luther","schrodinger","schrodinger","galileo","galileo"]
let expertPersonalities=["hitler","hitler","stalin","stalin","lenin","lenin","churchill","churchill","motherTeresa","motherTeresa","einstein","einstein","gandhi","gandhi","lama","lama",
"aristotle","aristotle","beethoven","beethoven","elizabeth","elizabeth","marx","marx","licoln","licoln","napoleon","napoleon","newton","newton",
"alexander","alexander","tesla","tesla","mandela","mandela","shakespeare","shakespeare","che","che","chaplin","chaplin","curie","curie","luther","luther","schrodinger","schrodinger","galileo","galileo",
"colombus","colombus","mozart","mozart","charlemagne","charlemagne","planck","planck","mao","mao","ali","ali","roosevelt","roosevelt","plato","plato","senna","senna","darwin","darwin","voltaire","voltaire","heisenberg","heisenberg","vasco","vasco","putin","putin",
"freud","freud","monroe","monroe","mendeleev","mendeleev"]



let classesEasy =easyFootball
let classesMedium = mediumFootball
let classesHard = hardFootball
let classesExpert = expertFootball
//***********************AUDIO FUNTION**********************8 */
function play(sound,vol) {
    let audio = new Audio(sound);
    audio.sound = vol;
    const promise = audio.play();

if (promise!== undefined) {
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
// window.onload(play("/sounds/gamemusic.mp3"));
window.addEventListener('load', () => {
    starterMusic=play("/sounds/gamemusic.mp3",1)
    console.log(starterMusic)
  });



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
const subjectRadios=document.getElementsByName("subject")

function changerSubjectRadios(){
    Array.from(subjectRadios).forEach((radio)=>{
        radio.addEventListener("change",()=>{
            console.log(radio.value);
            if (radio.value == "football") {
                body.style.backgroundImage='url("https://i.pinimg.com/736x/41/b7/07/41b707b7632118fd15807ed0bc9c85bc.jpg")'
                classesEasy =easyFootball
                classesMedium = mediumFootball
                classesHard = hardFootball
                classesExpert = expertFootball
                
         
             } else if (radio.value == "countries") {
                 body.style.backgroundImage='url("https://w0.peakpx.com/wallpaper/395/226/HD-wallpaper-world-map-world-worldview-flags-map.jpg")'
                classesEasy =easyCountries
                classesMedium = mediumCountries
                classesHard = hardCountries
                classesExpert = expertFootball
               
             } else if (radio.value == "jungle") {
                body.style.backgroundImage='url("https://thumbs.dreamstime.com/b/deep-jungle-southeast-asia-dense-vegetation-southeast-asian-deep-jungle-128947163.jpg")'
                classesEasy =easyJungle
                classesMedium = mediumJungle
                classesHard = hardJungle
                classesExpert = expertJungle
             } else {
                 body.style.backgroundImage='url("https://www.bestfunquiz.com/docs/14317992.jpg")'
                 classesEasy =easyPersonalities
                 classesMedium=mediumPersonalities
                 classesHard = hardPersonalities
                 classesExpert = expertPersonalities
             }
         
        })
    })
}
changerSubjectRadios()

// const subjectChoice = document.querySelector('input[name="subject"]:checked').value

// function findSubject(){
//     if (subjectChoice == "football") {
//         classesEasy =easyFootball
//         classesMedium = mediumFootball
//         classesHard = hardFootball
//         classesExpert = expertFootball

//     } else if (subjectChoice == "countries") {
//         classesEasy =easyCountries
//         classesMedium = mediumFootball
//         classesHard = hardFootball
//         classesExpert = expertFootball
//     } else if (subjectChoice == "jungle") {
//         rows = 5
//         columns = 10
//         classes = classesHard
//     } else {
//         rows = 6
//         columns = 14
//         classes = classesExpert
//     }


// }
// // findSubject()

//WHEN PUSH THE START GAME
startGame=()=>{
    gamePreferences.style.display="none";
    play("/sounds/menu-button.mp3",1.5)
    console.log(starterMusic)
    starterMusic.pause();

   
    if (document.getElementById("message").innerHTML.length > 0) {
        console.log("patisou mwri malakia")
        resetGame()
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





            const difficultyChoice = document.querySelector('input[name="difficulty"]:checked').value
            
            // const classesEasy =easyFootball
            // const classesMedium = mediumFootball
            // const classesHard = hardFootball
            // const classesExpert = expertFootball
            let rows, columns, classes
            function findRowColumns() {
                if (difficultyChoice == "easy") {
                    rows = 4
                    columns = 4
                    classes = classesEasy
                    console.log(classes)

                } else if (difficultyChoice == "medium") {
                    rows = 5
                    columns = 6
                    classes = classesMedium

                } else if (difficultyChoice == "hard") {
                    rows = 5
                    columns = 10
                    classes = classesHard
                } else {
                    rows = 6
                    columns = 14
                    classes = classesExpert
                }


            }
            findRowColumns()
            console.log(classes)
           
            function createBoard() {
                 play("/sounds/game-start.mp3",1.5);
                let resDiv = document.createElement("div");
                resDiv.id = "results"
                let pMoves = document.createElement("p")
                let pTime = document.createElement("p");
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
                let textMoves = document.createTextNode("Moves: ");
                let textTime = document.createTextNode("Time: ");
                pMoves.appendChild(textMoves);
                pMoves.appendChild(spanMoves);
                pTime.appendChild(textTime)
                pTime.appendChild(spanTime)
                resDiv.appendChild(pMoves)
                resDiv.appendChild(pTime)
                game.appendChild(resDiv);




                for (i = 0; i < rows; i++) {

                    let div = document.createElement("div");
                    div.className = "row";
                    for (j = 0; j < columns; j++) {

                        let cardDiv = document.createElement("div")
                        cardDiv.className = "card";
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
                    }
                    game.appendChild(div)

                }
            }
            createBoard();


            function imgFrontSizeCard(){
                let subjectChoice = document.querySelector('input[name="subject"]:checked').value
                if(subjectChoice=="countries"){
                Array.from(fronts).forEach((front)=>{
                    front.style.backgroundImage="url('https://static01.nyt.com/images/2016/05/03/world/what-in-the-world/WITW-PROMO/WITW-PROMO-videoSixteenByNineJumbo1600.jpg')"
                    
                })
            }else if(subjectChoice=="jungle"){
                Array.from(fronts).forEach((front)=>{
                    front.style.backgroundImage="url('https://www.citypng.com/public/uploads/preview/wild-animals-zoo-badge-transparent-background-11582128549srkj07rmqg.png')"
                    
                })
            }else if(subjectChoice=="personalities"){
                Array.from(fronts).forEach((front)=>{
                    front.style.backgroundImage="url('/images/personalitiesCardFront.png')"
                    
                })
            }
            }
            imgFrontSizeCard()


    
     
            //COUNTER
            active = true;

            clock(active);

            //***********************************************************************************************
            const cards = document.getElementsByClassName("card");
            // let backs = document.getElementsByClassName("back");
            let contents = document.getElementsByClassName("content");
            let clickedCard = null;

            let tries = 0;
            let span = document.querySelector("span");


            function placeTeamRandom(card) {
                let randomTeam = classes[Math.floor(Math.random() * classes.length)]
                let back = card.querySelector('.back');
                let front = card.querySelector(".front")
                back.classList.add(randomTeam);
                front.dataset.team = randomTeam;
                // console.log(card.dataset.color)
                let randomTeamIndex = classes.indexOf(randomTeam)


                classes.splice(randomTeamIndex, 1);


            }


            Array.from(cards).forEach((card) => {

                placeTeamRandom(card, classes)



                card.addEventListener("click", (e) => {

                    play("/sounds/flipcard.mp3",1.5);
                    console.log(e.target);
                    let child = card.querySelector('.content')
                    let front = card.querySelector(".front")

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

                                // console.log(front.getAttribute('data-team') + " " + clickedCard.querySelector(".front").getAttribute("data-team"));
                                // console.log(true)

                                span.innerHTML = ++tries;
                                card.classList.add("founded")
                                clickedCard.classList.add("founded")
                                clickedCard = null;
                                setTimeout(() => {play("/sounds/correct.mp3") }, 300);

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
                                            game.style.display = "none";
                                            document.getElementById("message").style.display = "block";
                                            play("/sounds/successWin.mp3",1.5)
                                            document.getElementById("message").innerHTML = "Congratulations you won at " + tries + " moves!";
                                        }


                                    }, 500)
                                }
                                endGame()


                            } else {
                                console.log(e.target + " " + clickedCard)
                                console.log(e.target.getAttribute('data-team') + " " + clickedCard.getAttribute("data-team"));
                                console.log(false)
                                span.innerHTML = ++tries;
                                setTimeout(() => {
                                    card.classList.add("wrong")
                                    clickedCard.classList.add("wrong")
                                    play("/sounds/error-sound.mp3")
                                    child.classList.remove("contentActive")
                                    clickedCard.querySelector(".content").classList.remove('contentActive')
                                    Array.from(cards).forEach((card) => {
                                        card.classList.remove("disable");
                                        // card.classList.remove("wrong");
                                    })
                                   
                                    
                                    clickedCard = null;
                                }, 1000)
                                
                                    





                            }



                        }

                })



            })


        }
    }
}


pauseGame = () => {
    play("/sounds/menu-button.mp3",1.5)
    startBtn.innerHTML = "Continue";
    startBtn.addEventListener('click', startGame)
    game.classList.add("disable");
    active = false;
    clock(active)
}
resetGame = () => {
    play("/sounds/menu-button.mp3",1.5)
    document.location.reload(true);
}
pauseBtn.addEventListener("click", pauseGame)
startBtn.addEventListener("click", startGame)
resetBtn.addEventListener("click", resetGame)
