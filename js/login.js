document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form reload
  window.location.href = 'quiz.html'; // directly go to quiz page
});
