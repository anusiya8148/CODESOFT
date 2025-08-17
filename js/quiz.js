let questions = [
  {
    q: 'What does CPU stand for?',
    options: [
      'Central Process Unit',
      'Central Processing Unit',
      'Computer Personal Unit',
      'Central Processor Utility',
    ],
    answer: 'Central Processing Unit',
  },
  {
    q: 'Which is an output device?',
    options: ['Keyboard', 'Mouse', 'Monitor', 'Scanner'],
    answer: 'Monitor',
  },
  {
    q: 'What is the brain of a computer?',
    options: ['CPU', 'RAM', 'Hard Disk', 'GPU'],
    answer: 'CPU',
  },
  {
    q: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'Hyperlinks Text Mark Language',
      'Home Tool Markup Language',
      'None',
    ],
    answer: 'Hyper Text Markup Language',
  },
  {
    q: 'Which is not an input device?',
    options: ['Printer', 'Keyboard', 'Mouse', 'Microphone'],
    answer: 'Printer',
  },
  {
    q: 'What does RAM stand for?',
    options: [
      'Random Access Memory',
      'Read Access Memory',
      'Run Access Memory',
      'Random Apply Memory',
    ],
    answer: 'Random Access Memory',
  },
  {
    q: 'Which is storage device?',
    options: ['RAM', 'Hard Disk', 'CPU', 'Monitor'],
    answer: 'Hard Disk',
  },
  {
    q: 'Which software is used to browse internet?',
    options: ['MS Word', 'Chrome', 'Excel', 'Photoshop'],
    answer: 'Chrome',
  },
  {
    q: 'Which key is used to delete?',
    options: ['Shift', 'Ctrl', 'Delete', 'Tab'],
    answer: 'Delete',
  },
  {
    q: 'Which is a programming language?',
    options: ['Python', 'MS Paint', 'Excel', 'Windows'],
    answer: 'Python',
  },
  {
    q: 'Which is the smallest unit of data?',
    options: ['Byte', 'Bit', 'KB', 'MB'],
    answer: 'Bit',
  },
  {
    q: 'Which device is used for printing?',
    options: ['Printer', 'Scanner', 'Keyboard', 'Mouse'],
    answer: 'Printer',
  },
  {
    q: 'What is Google Chrome?',
    options: ['Browser', 'OS', 'Search Engine', 'Database'],
    answer: 'Browser',
  },
  {
    q: 'Which one is not a browser?',
    options: ['Edge', 'Opera', 'Windows', 'Firefox'],
    answer: 'Windows',
  },
  {
    q: 'What does WWW stand for?',
    options: [
      'World Wide Web',
      'World Wide Windows',
      'World Work Web',
      'Wide World Web',
    ],
    answer: 'World Wide Web',
  },
];

let currentQuestion = 0;
let score = 0;
let selected = false;

function loadQuestion() {
  let q = questions[currentQuestion];
  document.getElementById('question').innerText = q.q;
  let optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  q.options.forEach((opt) => {
    let btn = document.createElement('button');
    btn.innerText = opt;
    btn.onclick = () => selectAnswer(btn, opt);
    optionsDiv.appendChild(btn);
  });

  selected = false;
}

function selectAnswer(btn, chosen) {
  if (selected) return;
  selected = true;

  let correct = questions[currentQuestion].answer;
  if (chosen === correct) {
    btn.style.backgroundColor = 'green';
    score++;
  } else {
    btn.style.backgroundColor = 'red';
    [...document.querySelectorAll('#options button')].forEach((b) => {
      if (b.innerText === correct) b.style.backgroundColor = 'green';
    });
  }
}

function nextQuestion() {
  if (!selected) {
    alert('Please select an answer!');
    return;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem('quizScore', score);
    window.location.href = 'result.html';
  }
}

window.onload = loadQuestion;
