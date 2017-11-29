$(document).ready(function() {


// Create array for questions

// Create array for answers dependent on questions

//

    var triviaGame = [{
        question: "How many original Harry Potter films were made?",
        answers: ["11", "6", "8", "5"],
        correctAnswer: answers[2],
    },

    {
        question: "Who is Tom Riddle really?",
        answers: ["Young Dumbledore", "Voldemort", "Severus Snape", "Sirius Black"],
        correctAnswer: answers[1],
    },

    {
        question: "Who killed Dumbledore?",
        answers: ["Severus Snape", "Sirius Black", "Harry Potter", "Draco Malfoy"],
        correctAnswer: answers[0],
    },

    {
        question: "Who tried to kill Harry when he was a baby?",
        answers: ["Sirius Black", "Voldemort", "Severus Snape", "Bellatrix"],
        correctAnswer: answers[1],
    },

    {
        question: "Who escapes from the prison of Azkaban?",
        answers: ["Voldemort", "Lucius Malfoy", "Remus Lupin", "Sirius Black"],
        correctAnswer: answers[3],
    },

    {
        question: "What is the golden snitch?",
        answers: ["Golden Candy", "Seeker's Goal", "A person who tattles", "Trophy"],
        correctAnswer: answers[1],
    },

    {
        question: "What was Ron's owl's name?",
        answers: ["Nagini", "Hedwig", "Crookshanks", "Mrs.Norris"],
        correctAnswer: answers[1],
    },

    {
        question: "Did Dumbledore know Snape was going to kill him?",
        answers: ["Yes", "No"],
        correctAnswer: answers[0],
    },
        
    ];

    var questionCounter = 0;
    var questionsCorrect = 0;
    var questionsIncorrect = 0;
    var timeRemaining = 30;
    


//Display questions and answer options
    function showQuestion() {
        $("#currentQuestion").html("<h2>" + triviaGame[questionCounter].question + " </h2>");
    };

    $("#startButton").on("click", function() {
       
        showQuestion();
          
        function nextQuestion(){
            questionCounter++
        };

        timeRemaining = setInterval(timer, 3000);
        $("#timer").html(timeRemaining);
        timer--;


         //user selects correct answer, add to points and let them know it was correct

    });

       


//Determine what happens once user clicks an answer

//if answer is right

//if answer is wrong
    









});