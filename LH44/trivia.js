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
  // Add more questions and options as needed
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionContainer = document.getElementById('question-container');
  const optionsContainer = document.getElementById('options-container');

  const currentQuizData = quizData[currentQuestion];

  questionContainer.innerText = currentQuizData.question;
  optionsContainer.innerHTML = "";

  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.innerText = option;
    button.addEventListener('click', () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(answer) {
  const currentQuizData = quizData[currentQuestion];

  if (answer === currentQuizData.correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerText = `Your Score: ${score} out of ${quizData.length}`;
}

function nextQuestion() {
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerText = "";

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    alert('End of Quiz!');
  }
}

// Initial load
loadQuestion();