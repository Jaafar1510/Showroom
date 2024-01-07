const quizData = [
  {
    question: "In which year did Lewis Hamilton make his Formula 1 debut?",
    options: ["2004", "2005", "2006", "2007"],
    correctAnswer: "2007"
  },
  {
    question: "How many Formula 1 World Championships has Lewis Hamilton won?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7"
  },
  {
    question: "How many races has Lewis hamilton won?",
    options: ["102", "103", "104", "105"],
    correctAnswer: "103"
   },
   {
    question: "Lewis Hamilton won his 100th Formula 1 Grand Prix at which circuit?",
    options: ["Monza", "Silverstone", "Spa-Francorchamps", "Sochi Autodrom"],
    correctAnswer: "Sochi Autodrom"
   },
   {
    question: "During the 2021 season, Lewis Hamilton achieved his 100th pole position. At which Grand Prix did he secure this milestone?",
    options: ["United States Grand Prix", "Italian Grand Prix", "Russian Grand Prix", "Turkish Grand Prix"],
    correctAnswer: "Italian Grand Prix"
   },
   {
    question: "Lewis Hamilton set the record for the most consecutive points finishes in Formula 1. How many races did he achieve this streak?",
    options: ["27 races", "33 races", "48 races", "53 races"],
    correctAnswer: "48 races"
   },
   {
    question: "How many consecutive World Championships did Lewis Hamilton win?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4"
   },
   {
    question: "At which race did Lewis Hamilton achieve his first Formula 1 victory with Mercedes?",
    options: ["Hungarian Grand Prix", "Canadian Grand Prix", "Australian Grand Prix", "Malaysian Grand Prix"],
    correctAnswer: "Hungarian Grand Prix"
   },
   {
    question: "Who is Lewis Hamilton Idol in F1?",
    options: ["Niki Lauda", "Micheal Schumacher", "Ayrton Senna", "Juan Manuel Fangio"],
    correctAnswer: "Ayrton Senna"
   },
   {
    question: "In which year did Lewis Hamilton achieve his first Grand Slam in Formula 1 (pole position, fastest lap, leading every lap, and winning the race) and at which Grand Prix did this occur?",
    options: ["2008 Canadian Grand Prix", "2014 Malaysian Grand Prix", "2015 Italian Grand Prix", "2017 Belgian Grand Prix"],
    correctAnswer: "2014 Malaysian Grand Prix"
   },
   {
    question: "At the 2020 British Grand Prix, Lewis Hamilton clinched victory despite facing a tire puncture on the final lap. Which tire on his car suffered the puncture?",
    options: ["Front Left", "Front Right", "Rear Left", "Rear Right"],
    correctAnswer: "Front Left"
   },
   {
    question: "During the 2019 Canadian Grand Prix, Lewis Hamilton had an intense battle with which driver, resulting in multiple on-track incidents and dramatic moments?",
    options: ["Sebastian Vettel", "Max Verstappen", "Valtteri Bottas", "Esteban Ocon"],
    correctAnswer: "Sebastian Vettel"
   },
   {
    question: "How many points did Lewis Hamilton haul in the 2014 season finale, the Abu Dhabi Grand Prix?",
    options: ["25", "26", "50", "51"],
    correctAnswer: "50"
   },
   {
    question: "At which Grand Prix did Hamilton secure the 2015 title?",
    options: ["Mexico", "Brazil", "Abu Dhabi", "USA"],
    correctAnswer: "USA"
   },
   {
    question: "New season, new team mate, and a new challenge from Ferrari. But who took the most podiums in 2017?",
    options: ["Lewis Hamilton", "Sebastian Vettel", "Valtteri Bottas", "All Of The Above"],
    correctAnswer: "All Of The Above"
   },
   {
    question: "Hamilton matched Ayrton Senna's pole positions tally of 65 at which race in 2017?",
    options: ["Abu Dhabi", "Bahrain", "Canada", "Great Britain"],
    correctAnswer: "Canada"
   },
   {
    question: "Hamilton clinched his fourth World Championship in Mexico 2017, finishing where in the race?",
    options: ["DNF", "1st", "5th", "9th"],
    correctAnswer: "9th"
   },
   {
    question: "After the 2019 season, in which he had clinched his his sixth World Championship, Hamilton had won what percentage of his F1 races?",
    options: ["25%", "50%", "33%", "66%"],
    correctAnswer: "33%"
   },
   /*{
    question: "",
    options: ["", "", "", ""],
    correctAnswer: ""
   },*/
  // Add more questions and options as needed
];

// quizData remains the same as you provided

let currentQuestion = 0;
let score = 0;
let userName;

// Load the answered questions from sessionStorage
const answeredQuestions = JSON.parse(sessionStorage.getItem('answeredQuestions')) || [];
const submittedQuestions = new Set();

function startQuiz() {
    // Get the user's name
    userName = prompt("Please enter your name:");
    // You may want to add additional validation or error handling for the name input

    // Initial load
    loadQuestion();
}

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const resultContainer = document.getElementById('result-container');
    const submitButton = document.getElementById('submit-button');
    const nextButton = document.getElementById('next-button');


    // Clear previous feedback
    resultContainer.innerText = "";

    const currentQuizData = quizData[currentQuestion];

    questionContainer.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";

    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        // Check if the question has been submitted
        if (answeredQuestions.includes(currentQuestion) || submittedQuestions.has(currentQuestion)) {
            // Disable buttons and apply styling to the selected answer
            button.disabled = true;
if (currentQuizData.selectedAnswer === option) {
                button.style.border = '2px solid #7957A0';
                button.style.backgroundColor = '#DDFF48';
                button.style.color = '#7957A0';
            }
        } else {
            button.addEventListener('click', () => selectAnswer(button, option));
        }
        optionsContainer.appendChild(button);
    });

    // Hide the "Next" button initially
    nextButton.style.display = 'none';
 // Show or hide the "Submit" button based on whether the question has been answered
    submitButton.style.display = answeredQuestions.includes(currentQuestion) ? 'none' : 'inline-block';
}

function selectAnswer(button, answer) {
    const currentQuizData = quizData[currentQuestion];

    // Remove styling from previously selected buttons
    const buttons = document.querySelectorAll('#options-container button');
    buttons.forEach(btn => {
        btn.style.border = 'none';
        btn.style.backgroundColor = '';
        btn.style.color = '';
    });

    // Apply styling to the selected button
    button.style.border = '2px solid #7957A0';
    button.style.backgroundColor = '#DDFF48';
    button.style.color = '#7957A0';

    // Check if the question has been submitted, prevent changing the answer
    if (submittedQuestions.has(currentQuestion)) {
        return;
    }

    // Save the selected answer for later submission if needed
    currentQuizData.selectedAnswer = answer;

// Add the question to the list of answered questions in sessionStorage
    answeredQuestions.push(currentQuestion);
    sessionStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));

    // Show the "Next" button after an answer is selected
   // const nextButton = document.getElementById('next-button');
   // nextButton.style.display = 'block';
}

function submitAnswer() {
    const currentQuizData = quizData[currentQuestion];
    const resultContainer = document.getElementById('result-container');
    const nextButton = document.getElementById('next-button');

    if (currentQuizData.selectedAnswer === currentQuizData.correctAnswer) {
        resultContainer.innerText = "Correct!";
     score++;
    } else {
        resultContainer.innerText = `Incorrect. The correct answer is: ${currentQuizData.correctAnswer}`;
    }
    // Show the "Next" button after submitting
   nextButton.style.display = 'inline-block';

    // Hide the "Submit" button
    /*const submitButton = document.getElementById('submit-button');
    submitButton.style.display = 'none';*/
    // Mark the question as submitted
    submittedQuestions.add(currentQuestion);
}

function showResult() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerText = `${userName}, Your Score: ${score} out of ${quizData.length}`;
}

function nextQuestion() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerText = "";

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

function previousQuestion() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerText = "";

    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// Initial load
startQuiz();