const questions = [
    {
        text: "What is the capital of France? ",
        options: ["Paris", "Berlin", "Rome", "Madrid"],
        answer: 0
    },
    {
        text: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 1
    },
    {
        text: "What does HTTP stand for?",
        options: [
            "HyperText Transfer Protocol",
            "Hyper Trainer Tracking Protocol",
            "HyperText Transmission Program",
            "HyperText Transfer Program"
        ],
        answer: 0
    }
];

const totalQuestions = questions.length;
let currentQuestionIndex = 0;
let selectedOptionIndex = null;
let timerDuration = 20;
let timerInterval = null;

// elements
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const progressText = document.getElementById('progress-text');
const timerEl = document.getElementById('timer');
const roomCodeEl = document.getElementById('room-code');
const studentNameEl = document.getElementById('student-name');

const roomcode = localStorage.getItem('roomcode') || '-';
const username = localStorage.getItem('username') || '-';
roomCodeEl.textContent = `Room: ${roomcode}`;
studentNameEl.textContent = `Student: ${username}`;


function startTimer() {
    let timeLeft = timerDuration;
    timerEl.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleSubmit();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function loadQuestion(index) {
    selectedOptionIndex = null;
    submitBtn.disabled = true;
    progressText.textContent = 'Waiting for answer...';

    questionNumberEl.textContent = `Question ${index + 1} of ${totalQuestions}`;
    const q = questions[index];
    questionTextEl.textContent = q.text;

    optionsContainerEl.innerHTML = '';

    q.options.forEach((optText, i) => {
        const btn = document.createElement('button');
        btn.classList.add('option');
        btn.textContent = optText;
        btn.disabled = false;
        btn.addEventListener('click', () => selectOption(i, btn));
        optionsContainerEl.appendChild(btn);
    });

    startTimer();
}

function selectOption(index, btn) {
  if (selectedOptionIndex !== null) return; // Already selected

  selectedOptionIndex = index;

  // Visually mark selected and disable others
  Array.from(optionsContainerEl.children).forEach((child, i) => {
    child.disabled = true;
    child.classList.toggle('selected', i === index);
  });

  submitBtn.disabled = false;
  progressText.textContent = 'Option selected. Submit when ready.';
}

function handleSubmit() {
  if (selectedOptionIndex === null) {
    // Auto select no answer and move on after timer ends
    progressText.textContent = 'No answer selected. Moving on...';
  } else {
    progressText.textContent = 'Answer submitted!';
  }

  stopTimer();
  submitBtn.disabled = true;

  // Simulate delay (1s) before next question or finish
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
      loadQuestion(currentQuestionIndex);
    } else {
      window.location.href = '/score.html';
    }
  }, 1000);
}

submitBtn.addEventListener('click', handleSubmit);

// Start first question on load
loadQuestion(currentQuestionIndex);
