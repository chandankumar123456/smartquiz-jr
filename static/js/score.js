// Simple script to dynamically populate score page with results

// These can be set via localStorage or URL params in your actual app
const totalQuestions = parseInt(localStorage.getItem('totalQuestions')) || 3;
const correctCount = parseInt(localStorage.getItem('correctCount')) || 0;
const incorrectCount = parseInt(localStorage.getItem('incorrectCount')) || 0;
const skippedCount = totalQuestions - correctCount - incorrectCount;

// Elements
const scoreDisplay = document.getElementById('score-display');
const summaryEl = document.getElementById('performance-summary');
const correctEl = document.getElementById('correct-count');
const incorrectEl = document.getElementById('incorrect-count');
const skippedEl = document.getElementById('skipped-count');
const playAgainBtn = document.getElementById('play-again-btn');
const exitBtn = document.getElementById('exit-btn');

// Set score text
scoreDisplay.textContent = `Your Score: ${correctCount} / ${totalQuestions}`;

// Set breakdown counts
correctEl.textContent = correctCount;
incorrectEl.textContent = incorrectCount;
skippedEl.textContent = skippedCount;

// Performance summary based on score percentage
const percent = (correctCount / totalQuestions) * 100;
let message = '';
let emoji = '';

if (percent >= 85) {
  message = 'Excellent! 🎉';
} else if (percent >= 60) {
  message = 'Good job! 👍';
} else if (percent >= 40) {
  message = 'Keep Practicing! 💪';
} else {
  message = 'Better luck next time! 🌟';
}

summaryEl.textContent = message;

// Button actions
playAgainBtn.onclick = () => {
  // Clear any stored quiz data if needed
  localStorage.removeItem('totalQuestions');
  localStorage.removeItem('correctCount');
  localStorage.removeItem('incorrectCount');
  // Redirect to join page
  window.location.href = '/join.html';
};

exitBtn.onclick = () => {
  // Redirect to homepage or close session
  window.location.href = '/';
};
