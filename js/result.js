window.onload = function () {
  let score = localStorage.getItem('quizScore') || 0;
  document.getElementById('score').innerText = score + ' / 15';
};

function restartQuiz() {
  window.location.href = 'index.html';
}
