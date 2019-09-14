let questionBank = [
  {
    question: "In what book did the following quote appear: '...remember that you are braver than you believe, stronger thank you seem and smarter than you think'?",
    answers: ["The Secret Garden", "Winnie the Pooh", "Peter Pan", "The Cat in the Hat"],
    correct: "Winnie the Pooh",
    name: "q01"
  },
  {
    question: "Who wrote 'Where the Sidewalk Ends'?",
    answers: ["Shel Silverstein", "Dr. Seuss", "Stephen King", "Beatrix Potter"],
    correct: "Shel Silverstein",
    name: "q02",
  },
  {
    question: "This book written by Stephen King was first made popular in 1975. What is it?",
    answers: ["It", "The Stand", "Carrie", "Salem's Lot"],
    correct: "Salem's Lot",
    name: "q03",
  },
  {
    question: "J.D. Robb is the nome de plume for what author?",
    answers: ["Nora Roberts", "Danielle Steel", "Lori Foster", "Elizabeth Lowell"],
    correct: "Nora Roberts",
    name: "q04",
  },
  {
    question: "What author writes the Anita Blake Vampire Hunter series?",
    answers: ["Patricia Bragg", "Jennifer Estep", "Laurell K. Hamilton", "Stephanie Meyer"],
    correct: "Laurell K. Hamilton",
    name: "q05"
  },
  {
    question: "'Today you are You, that is truer than true. There is no one alive who is Youer than You.' Who said it? ",
    answers: ["Dr. Seuss", "Beverly Cleary", "Margaret Wise Brown", "Lois Lowry"],
    correct: "Dr. Seuss",
    name: "q06"
  },
  {
    question: "This American First Lady wrote 'Booke of Cookery'. Who is it?",
    answers: ["Martha Washington", "Laura Bush", "Mary Todd Lincoln", "Louisa Adams"],
    correct: "Martha Washington",
    name: "q07"
  },
  {
    question: "What African American author said: 'If you are silent about your pain, they'll kill you and say you enjoyed it'?",
    answers: ["Terry McMillan", "Toni Morrison", "Octavia E. Butler", "Zora Neale Hurston"],
    correct: "Zora Neale Hurston",
    name: "q08"
  },
  {
    question: "How many plays did Shakespeare write?",
    answers: ["60", "75", "125", "38"],
    correct: "38",
    name: "q09"
  },
  {
    question: "Which of these books did Louisa May Alcott write?",
    answers: ["Where the Wild Things Grow", "A Wrinkle in Time", "An Old Fashioned Thanksgiving", "Pippi Longstocking"],
    correct: "Shel Silverstein",
    name: "q10"
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
let counter = 30;
$("#timer").text("Remaining Time: " + counter);
let counterStart;
let counterRunning = false;
function counterStop(){
  clearInterval(counterStart);
  counter;
}
function decrement(){
  counter--;
  $("#timer").text("Remaining Time: " + counter);
  if (counter === 0){
    counterStop();
  }
}

function questionLoad() {
  counter = 30;
  counterStart = setInterval(decrement, 1000);
  counterRunning = true;
  $("#question").html("<h6 class= questions>" + questionBank[firstQuestion].question + "</h6>");
  for (var i = 0; i < questionBank[firstQuestion].answers.length; i++) {
    $("#question").append("<br>" + "<input type='radio' value='" + questionBank[firstAnswer].answers[i] + "' class='answers' name='" + questionBank[firstQuestion].name + "'>" + questionBank[firstAnswer].answers[i]);
  }
}

//create a variable for the rest of the questions to display.
//if no questions remain, hide the submit button and the questions&answers.
//also display results of game
//create a click event to select an answer
//if the answer is correct, accumulate to correct Answers
//if answer is wrong, accumulate to incorrect Answers
//else, accumulate to unaswered questions.


/* setTimeout(correctMessage, 5000);
   function correctMessage() {
     alert("Congrats...your answer was correct!")
     console.log("5 second break to show message")
 
 setTimeout(incorrectMessage, 5000);
 function incorrectMessage() {
 alert("Sorry...your answer was incorrect.")*/


//create submit button
$("#submit-button").on("click", function () {
  //alert("button working")
  let solution = questionBank[firstQuestion].correct;
  console.log("solution" + solution)
  var userChoice = $("input[name=" + questionBank[firstQuestion].name + "]:checked").val();
  console.log("user chose: " + userChoice)
  if (userChoice == solution) {
    correctAnswers++;
    console.log("correct answer: " + correctAnswers);
  }
  else if (userChoice != solution) {
    incorrectAnswers++;
    console.log("incorrect answer: " + incorrectAnswers);

  }
  else if (userChoice == undefined) {
    unansweredQuestions++;
    console.log("unanswered questions: " + unansweredQuestions)
  }
  nextQuestion();
})



let nextQuestion = function () {
  let remainingQuestions = questionBank.length - 1;
  if (remainingQuestions === firstQuestion) {
    $("#submit-button").hide();
    $("#question").hide();
    $("#correct-answers").text("You answered " + correctAnswers + " questions correctly");
    $("#incorrect-answers").text("You answered " + incorrectAnswers + " questions incorrectly");
    $("#unanswered-questions").text("There were " + unansweredQuestions + " unanswered questions");
    $("#reset-button").append("<button id='reset-button' type='reset' class='btn btn-primary'>" + "Reset" + "</button>");
  }
  else {
    firstQuestion++;
    firstAnswer++;
    //put a timeout here and reset timer
    questionLoad();
  }
}

//create timer variables and function for timer to run.
//should be part of my click event, which will be the start button
//will reset the timer so it doesn't keep going into negative numbers.
//will start the timer.



//create click event with start button. hide start button after being clicked.
//timer should start counting down.
//first question and answer should load.
//the next question should load if user answers question before the counter === 0 || no answer and timer === 0;
//incorrect, correct and unanswered should accumulate and display at end.

let start = $("#start-button");
$("#start-button").on("click", function () {
  //timer should start
  //questions, anwers, and submit button should display
  //if no questions remain, the submitt button should hide
  //hide questions and answers hide
  //display results
  //display reset
  $("#start-button").hide();
  questionLoad();
  $("#submit-button").append("<button id='submit-button' type='submit' class='btn btn-primary'>" + "Submit" + "</button>");
  gameReset();

})

//create reset.
let gameReset = function () {
  $("#reset-button").on("click", function () {
    location.reload();
  })
}