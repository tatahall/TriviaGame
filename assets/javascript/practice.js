let questionBank = [
    { question: "In what book did the following quote appear: '...remember that you are braver than you believe, stronger thank you seem and smarter than you think'?",
      answers: ["The Secret Garden", "Winnie the Pooh", "Peter Pan", "The Cat in the Hat"],
      correct: "Winnie the Pooh"
     },
    {question: "Who wrote 'Where the Sidewalk Ends'?",
    answers: ["Shel Silverstein", "Dr. Seuss", "Stephen King","Beatrix Potter"],
    correct: "Shel Silverstein"
    },
    {question: "This book written by Stephen King was first made popular in 1975. What is it?",
    answers: ["It", "The Stand", "Carrie", "Salem's Lot"],
    correct: "Salem's Lot"
    },
    {question: "J.D. Robb is the nome de plume for what author?",
    answers: ["Nora Roberts", "Danielle Steel", "Lori Foster", "Elizabeth Lowell"],
    correct: "Nora Roberts"
    },
    {question: "What author writes the Anita Blake Vampire Hunter series?",
    answers: ["Patricia Bragg", "Jennifer Estep", "Laurell K. Hamilton", "Stephanie Meyer"],
    correct: "Laurell K. Hamilton"
    },
    {question: "'Today you are You, that is truer than true. There is no one alive who is Youer than You.' Who said it? ",
    answers: ["Dr. Seuss", "Beverly Cleary","Margaret Wise Brown", "Lois Lowry"],
    correct: "Dr. Seuss"
    },
    {question: "This American First Lady wrote 'Booke of Cookery'",
    answers: ["Martha Washington","Laura Bush", "Mary Todd Lincoln", "Louisa Adams"],
    correct: "Martha Washington"
    },
    {question: "What African American author said: 'If you are silent about your pain, they'll kill you and say you enjoyed it'?",
    answers: ["Terry McMillan", "Toni Morrison", "Octavia E. Butler", "Zora Neale Hurston"],
    correct: "Zora Neale Hurston"
    },
    {question: "How many plays did Shakespeare write?",
    answers: ["60", "75", "125", "38"],
    correct: "38"
    },
    {question: "Which of these books did Louisa May Alcott write?",
    answers: ["Where the Wild Things Grow", "A Wrinkle in Time", "An Old Fashioned Thanksgiving","Pippi Longstocking"],
    correct: "Shel Silverstein"
    },]
    function resetTimer(){
        clearInterval (timer);
    }
     function countdown(){
         counter--;
         $("#timer").html("Time Remaining: " + counter + " seconds");
         if (counter === 0){
             resetTimer();
         }
     }
     couter = 30;
     timer = setInterval(countdown, 1000);
     function time(){
 
     }