/*You'll create a trivia form with multiple choice or true/false options (your choice).

The player will have a limited amount of time to finish the quiz. 


The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.


Don't let the player pick more than one answer per question.
Don't forget to include a countdown timer.*/

//start button should start the timer. click event.
//user should only be able to enter one answer for each question.
//the answers need to be in a click event?
//when time is done, should alert "all done".
//need to display and increment: correct answers, incorrect answers and unanswered.
//need to have a done button with a click event.
//game needs a reset button.

//created an object with questions
var questionBank = [
    { question: "Your Questions Here",
      answers: ["answer1", "answer2", "answer3", "answer4"],
      correct: "answer1"
     },
    {question: "what's your favorite color",
    answers: ["blue","red","orange","yellow"],
    correct: "orange"
    }]

   //created a variable and then declared the variable to beh append for the question
   //will need to try to create a for loop for the questions.
   //created a for loop for the answers to display

    var questionArea = $("#question");
    questionArea.append(questionBank[0].question);
    for(var i = 0; i < questionBank[0].answers.length; i++){
        console.log(questionBank[0].answers[i]);
        questionArea.append("<br>" + "<input type='radio' value='" + questionBank[0].answers[i] + "'>" + questionBank[0].answers[i]);

    }



