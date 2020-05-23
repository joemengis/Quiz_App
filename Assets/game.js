const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

 let currentQuestion = {};
 let acceptingAnswers = true;
 let score = 0;
 let questioncounter = 0;
 let availableQuestions = [];

 let questions = []
  //CONSTANTS

  const correctBonus = 10;
  const maxQuestions = 3;

  startGame = () => {
      questionCounter = 0;
      score = 0;
      availableQuestions = [...questions]
      console.log (availableQuestions);
  }

  startGame();

