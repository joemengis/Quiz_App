const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What is the correct sticking for a Paradiddle?",
        choice1: "RLLL RLLL",
        choice2: "RRRR LLLL",
        choice3: "RRLL RRLL",
        choice4: "RLRR LRLL",
        answer: 4
    },
    {
        question: "What instrument family does the piano belong to?",
        choice1: "Woodwinds",
        choice2: "Strings",
        choice3: "Percussion",
        choice4: "Brass",
        answer: 3
    },
    {
        question: "Which term is not a common slang for Drum Set?",
        choice1: "Trap Kit",
        choice2: "Tubs",
        choice3: "Skins",
        choice4: "Barrels",
        answer: 4
    },
    {
        question: "Which is not a common technique for how to hold drumsticks?",
        choice1: "French Grip",
        choice2: "MatchGrip",
        choice3: "Parallel Grip",
        choice4: "Match Grip",
        answer: 3
    },
    {
        question: "How many times do you strike the drum when performing a 9-Stroke Roll?",
        choice1: "18",
        choice2: "9",
        choice3: "36",
        choice4: "27",
        answer: 2
    },
    {
        question: "Which Drummer has toured with Sting, NIN, Weezer and DEVO?",
        choice1: "Josh Freese",
        choice2: "Kenny Aranoff",
        choice3: "Steve Gadd",
        choice4: "Ringo Starr",
        answer: 1
    },
    {
        question: "What is another name for a Kettle Drum?",
        choice1: "Timbale",
        choice2: "Timpani",
        choice3: "Side Drum",
        choice4: "Snare Drum",
        answer: 2
    },
    {
        question: "Which of these is a common Drum Rudiment?",
        choice1: "Skip To My Lou",
        choice2: "Hot Potato",
        choice3: "Flamacue",
        choice4: "Chicka Chicka",
        answer: 3
    },
    {
        question: "How many drums make a 5 piece drum set?",
        choice1: "5",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 1
    },
    {
        question: "Which of these is not a playable time signature?",
        choice1: "13/8",
        choice2: "4/4",
        choice3: "6/8",
        choice4: "7/7",
        answer: 4
    },
    {
        question: "A Flam is a single hit with what right before it?",
        choice1: "A Buzz",
        choice2: "A Diddle",
        choice3: "A Grace Note",
        choice4: "An Accent",
        answer: 3
    },
    {
        question: "Which style of drumming originated in New Orleans?",
        choice1: "Second Line",
        choice2: "Rudimental",
        choice3: "Orchestral",
        choice4: "Rock",
        answer: 1
    },
    {
        question: "The back beat is played on what beats?",
        choice1: "2 and 3",
        choice2: "1 and 3",
        choice3: "3 and 4",
        choice4: "2 and 4",
        answer: 4
    },
    {
        question: "When a musician says they are going to woodshed, they mean they plan to...",
        choice1: "Put away the Lawnmower",
        choice2: "Practice",
        choice3: "Get a dayjob",
        choice4: "Play outside",
        answer: 2
    },
    {
        question: "What makes a good Drummer?",
        choice1: "How fast they can play",
        choice2: "How many licks they know",
        choice3: "Good time keeping, rhythm, dynamics, instincts and general musicality",
        choice4: "looks, hair and attitude",
        answer: 3
    },

]

//CONSTANTS

const correctBonus = 10;
const maxQuestions = 10;
const incorrectPenalty = -10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    console.log (availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= maxQuestions){
        localStorage.setItem('mostRecentScore', score);
        //GO TO THE END PAGE
        return window.location.assign("./end.html");
    }

    questionCounter++;
    progressText.innerText = "Question " + questionCounter + "/" + maxQuestions;
    // Update the progress bar
    progressBarFull.style.width = `${(questionCounter / maxQuestions) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        

        const classToApply = 
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        
        if(classToApply === 'correct') {
            incrementScore(correctBonus);
        }else {
            decreaseTimer(incorrectPenalty);
        }
        

        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
        
        

        
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

decreaseTimer = num => {
    timer -= 10;
    timer.innerText = timer;
}

startGame(); 