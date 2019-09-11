/*click start.
counter begins counting down for displayed question.
user clicks on an answer.
after user answers or the couter === 0, next question displays.
if no more questions, results and done button display.
user clicks done to reset the game.
*/

let questionBank = [
  {
    question: "In what book did the following quote appear: '...remember that you are braver than you believe, stronger thank you seem and smarter than you think'?",
    answers: ["The Secret Garden", "Winnie the Pooh", "Peter Pan", "The Cat in the Hat"],
    correct: "Winnie the Pooh"
  },
  {
    question: "Who wrote 'Where the Sidewalk Ends'?",
    answers: ["Shel Silverstein", "Dr. Seuss", "Stephen King", "Beatrix Potter"],
    correct: "Shel Silverstein"
  },
  {
    question: "This book written by Stephen King was first made popular in 1975. What is it?",
    answers: ["It", "The Stand", "Carrie", "Salem's Lot"],
    correct: "Salem's Lot"
  },
  {
    question: "J.D. Robb is the nome de plume for what author?",
    answers: ["Nora Roberts", "Danielle Steel", "Lori Foster", "Elizabeth Lowell"],
    correct: "Nora Roberts"
  },
  {
    question: "What author writes the Anita Blake Vampire Hunter series?",
    answers: ["Patricia Bragg", "Jennifer Estep", "Laurell K. Hamilton", "Stephanie Meyer"],
    correct: "Laurell K. Hamilton"
  },
  {
    question: "'Today you are You, that is truer than true. There is no one alive who is Youer than You.' Who said it? ",
    answers: ["Dr. Seuss", "Beverly Cleary", "Margaret Wise Brown", "Lois Lowry"],
    correct: "Dr. Seuss"
  },
  {
    question: "This American First Lady wrote 'Booke of Cookery'",
    answers: ["Martha Washington", "Laura Bush", "Mary Todd Lincoln", "Louisa Adams"],
    correct: "Martha Washington"
  },
  {
    question: "What African American author said: 'If you are silent about your pain, they'll kill you and say you enjoyed it'?",
    answers: ["Terry McMillan", "Toni Morrison", "Octavia E. Butler", "Zora Neale Hurston"],
    correct: "Zora Neale Hurston"
  },
  {
    question: "How many plays did Shakespeare write?",
    answers: ["60", "75", "125", "38"],
    correct: "38"
  },
  {
    question: "Which of these books did Louisa May Alcott write?",
    answers: ["Where the Wild Things Grow", "A Wrinkle in Time", "An Old Fashioned Thanksgiving", "Pippi Longstocking"],
    correct: "Shel Silverstein"
  },]
console.log(questionBank[0].answers);
console.log(questionBank[1].question);
console.log(questionBank[2].correct);

//create variable for first question to load.
//create variables for correct answers, incorrect answers and unanswered questions.
let firstQuestion = 0;
let firstAnswer = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let unansweredQuestions = 0;
let correctAnswers = questionBank.correct;


function questionLoad() {
  $("#question").html("<h6>" + questionBank[firstQuestion].question + "</h6>");

  //should first answer be a click event?
  for (var i = 0; i < questionBank[firstQuestion].answers.length; i++) {
    $("#question").append("<br>" + "<input type='radio' value='" + questionBank[firstAnswer].answers[i] + "'>" + questionBank[firstAnswer].answers[i]);
   /* $("#question").on("click", function () {
      //make the results variable global; add if then statements here. add results to the start click event.
      if (questionBank.answers === correctAnswers) {
        correctAnswers++;
      }
      else if (questionBank.answers !== correctAnswers) {
        incorrecAnswers++;
      }
      else {
        unansweredQuestions++;
      }
    })
  }
}*/

let nextQuestion = function () {
  let remainingQuestions = questionBank - 1;
  if (remainingQuestions === 0) {
    $("#question").append("<br>" + "<p>" + "No questions left" + "</p>")
  }
  else {
    firstQuestion++;
    firstAnswer++;
    questionLoad();
  }
}

//create reset.
/*let gameReset = function(){
  $("#reset-button").on("click", function(){
    questionLoad();
  });
}*/

//create function for these to display to window after all questions have been answered or time runs out.

/*let resutls = function(){
  $("#correct-answers").text("You answered " + correctAnswers + " correct");
  $("#incorrect-answers").text("You answered " + incorrectAnswers + " incorrectly");
  $("#unanswered-questions").text("There were " + unansweredQuestions + " remaining")
  let resetButton = $("#reset-button");
  $("#reset-button").append("<button type='button' class='btn btn-primary'>" + "Reset" + "</button>")
  gameReset();
}*/

/*//create timer variables and function for timer to run.
//should be part of my click event, which will be the start button
let counter = 30;
let timer = setInterval(countdown, 1000);

//will reset the timer so it doesn't keep going into negative numbers.
function resetTimer(){
  clearInterval (timer);
}

//will start the timer.
function countdown(){
   counter--;
   $("#timer").html("Time Remaining: " + counter + " seconds");
   if (counter === 0){
       resetTimer();
   }
}*/

//create click event with start button.
//timer should start counting down.
//first question and answer should load.
//the next question should load if user answers question before the counter === 0 || no answer and timer === 0;
//incorrect, correct and unanswered should accumulate and display at end.


/*$("#start-button").on("click", function(){
  let start = $("#start-button");
  let timer = setInterval(countdown, 1000);
  countdown();
  questionLoad();
  if(counter === 0 || ){
    resetTimer;
    countdown();
    nextQuestion();
    nextAnswer();
  }

})*/

