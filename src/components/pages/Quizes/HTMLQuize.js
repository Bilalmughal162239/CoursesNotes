// Quiz.jsx
import React, { useState, useEffect } from 'react';
import { FaClock, FaArrowLeft, FaArrowRight, FaTrophy, FaStar } from 'react-icons/fa';

const quizData = {
  beginner: [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
      correct: 0
    },
    {
      id: 2,
      question: "Which HTML tag is used for the largest heading?",
      options: ["<h6>", "<h1>", "<heading>", "<header>"],
      correct: 1
    },
    {
      id: 3,
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<lb>", "<br>", "<newline>"],
      correct: 2
    },
    {
      id: 4,
      question: "Which attribute specifies the URL of the page the link goes to?",
      options: ["link", "src", "href", "url"],
      correct: 2
    },
    {
      id: 5,
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
      correct: 1
    },
    {
      id: 6,
      question: "Which HTML element is used to define important text?",
      options: ["<important>", "<b>", "<strong>", "<i>"],
      correct: 2
    },
    {
      id: 7,
      question: "What is the correct HTML for creating a hyperlink?",
      options: ["<a url='http://www.example.com'>Example</a>", "<a href='http://www.example.com'>Example</a>", "<a>http://www.example.com</a>", "<a name='http://www.example.com'>Example</a>"],
      correct: 1
    },
    {
      id: 8,
      question: "Which character is used to indicate an end tag?",
      options: ["<", "*", "/", "^"],
      correct: 2
    },
    {
      id: 9,
      question: "What is the correct HTML for making a checkbox?",
      options: ["<input type='check'>", "<input type='checkbox'>", "<checkbox>", "<check>"],
      correct: 1
    },
    {
      id: 10,
      question: "What is the correct HTML for making a text input field?",
      options: ["<input type='textfield'>", "<textinput type='text'>", "<input type='text'>", "<textfield>"],
      correct: 2
    },
  ],

  intermediate: [
    {
      id: 1,
      question: "What is the CSS box model?",
      options: ["Content, Padding, Border, Margin", "Header, Body, Footer", "HTML, CSS, JS", "None of the above"],
      correct: 0
    },
    {
      id: 2,
      question: "Which CSS property is used to change the text color?",
      options: ["text-color", "font-color", "color", "text-style"],
      correct: 2
    },
    {
      id: 3,
      question: "What is flexbox in CSS?",
      options: ["A layout method", "A color scheme", "A font family", "A border style"],
      correct: 0
    },
    {
      id: 4,
      question: "Which HTML5 element is used for navigation links?",
      options: ["<navigation>", "<nav>", "<navigate>", "<menu>"],
      correct: 1
    },
    {
      id: 5,
      question: "What is the purpose of media queries?",
      options: ["Database queries", "Responsive design", "Image optimization", "Form validation"],
      correct: 1
    },
    {
      id: 6,
      question: "Which CSS property is used to make text bold?",
      options: ["font-weight", "text-weight", "font-bold", "text-bold"],
      correct: 0
    },
    {
      id: 7,
      question: "What does the 'position: relative' CSS property do?",
      options: ["Positions relative to viewport", "Positions relative to parent", "Positions relative to normal position", "Removes from document flow"],
      correct: 2
    },
    {
      id: 8,
      question: "Which HTML attribute is used to define inline styles?",
      options: ["class", "style", "styles", "css"],
      correct: 1
    },
    {
      id: 9,
      question: "What is the default display value for a div element?",
      options: ["inline", "block", "inline-block", "flex"],
      correct: 1
    },
    {
      id: 10,
      question: "Which CSS selector has the highest specificity?",
      options: ["ID selector", "Class selector", "Element selector", "Universal selector"],
      correct: 0
    },

  ],

  advanced: [
    {
      id: 1,
      question: "What is the difference between CSS Grid and Flexbox?",
      options: ["Grid is 2D, Flex is 1D", "No difference", "Grid is older", "Flex is 2D, Grid is 1D"],
      correct: 0
    },
    {
      id: 2,
      question: "What is a CSS preprocessor?",
      options: ["A browser tool", "SASS/LESS", "HTML compiler", "JavaScript framework"],
      correct: 1
    },
    {
      id: 3,
      question: "What is the purpose of the 'data-' attribute?",
      options: ["Styling", "Custom data storage", "Validation", "Navigation"],
      correct: 1
    },
    {
      id: 4,
      question: "What is CSS specificity?",
      options: ["Color theory", "Rule priority system", "Animation timing", "Font loading"],
      correct: 1
    },
    {
      id: 5,
      question: "What is the Shadow DOM?",
      options: ["CSS shadow effect", "Encapsulated DOM", "Dark theme", "Hidden elements"],
      correct: 1
    },
    {
      id: 6,
      question: "What is the purpose of CSS custom properties (variables)?",
      options: ["Dynamic styling", "Code organization", "Performance optimization", "All of the above"],
      correct: 3
    },
    {
      id: 7,
      question: "What is the difference between 'em' and 'rem' units?",
      options: ["No difference", "em is relative to parent, rem to root", "rem is relative to parent, em to root", "Both are absolute units"],
      correct: 1
    },
    {
      id: 8,
      question: "What is Critical CSS?",
      options: ["Important CSS rules", "Above-the-fold CSS", "Error handling CSS", "CSS validation"],
      correct: 1
    },
    {
      id: 9,
      question: "What is the purpose of the 'will-change' CSS property?",
      options: ["Animation control", "Performance optimization", "Layout changes", "Color transitions"],
      correct: 1
    },
    {
      id: 10,
      question: "What is CSS containment?",
      options: ["Layout isolation", "Style encapsulation", "Performance optimization", "All of the above"],
      correct: 3
    },
  ]
};

const Quiz = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [disabledQuestions, setDisabledQuestions] = useState(new Set());

  const questions = selectedLevel ? quizData[selectedLevel] : [];
  const totalQuestions = questions.length;

  // Timer effect
  useEffect(() => {
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && quizStarted && !quizCompleted) {
      handleNextQuestion();
    }
  }, [timeLeft, quizStarted, quizCompleted]);

  // Reset timer when question changes
  useEffect(() => {
    if (quizStarted && !quizCompleted) {
      setTimeLeft(30);
    }
  }, [currentQuestion]);

  const startQuiz = (level) => {
    setSelectedLevel(level);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setDisabledQuestions(new Set());
    setQuizCompleted(false);
    setTimeLeft(30);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (disabledQuestions.has(currentQuestion)) return;

    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNextQuestion = () => {
    setDisabledQuestions(prev => new Set([...prev, currentQuestion]));

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    let correct = 0;
    let attempted = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] !== undefined) {
        attempted++;
        if (selectedAnswers[index] === question.correct) {
          correct++;
        }
      }
    });

    return { correct, attempted, total: totalQuestions };
  };

  const getResultEmoji = (percentage) => {
    if (percentage >= 90) return '🏆';
    if (percentage >= 80) return '🥇';
    if (percentage >= 70) return '🥈';
    if (percentage >= 60) return '🥉';
    if (percentage >= 50) return '👍';
    return '💪';
  };

  const getResultMessage = (percentage) => {
    if (percentage >= 90) return 'Outstanding! You\'re a master!';
    if (percentage >= 80) return 'Excellent work! Well done!';
    if (percentage >= 70) return 'Great job! Keep it up!';
    if (percentage >= 60) return 'Good effort! Room for improvement!';
    if (percentage >= 50) return 'Not bad! Keep practicing!';
    return 'Keep learning! You\'ll get better!';
  };

  const resetQuiz = () => {
    setSelectedLevel('');
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setDisabledQuestions(new Set());
    setTimeLeft(30);
  };

  // Level Selection Screen
  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <div className="level-selection">
          <div className="header-section mt-28">
            <h1 className="main-title">
              <FaTrophy className="title-icon" />
              HTML Quiz Challenge
            </h1>
            <p className="subtitle">Test your HTML knowledge with 100 questions!</p>
          </div>

          <div className="level-cards">
            <div
              className="level-card beginner"
              onClick={() => startQuiz('beginner')}
            >
              <div className="card-icon">🌱</div>
              <h3>Beginner</h3>
              <p>Basic HTML concepts and syntax</p>
              <div className="difficulty-bar">
                <div className="difficulty-fill beginner-fill"></div>
              </div>
            </div>

            <div
              className="level-card intermediate"
              onClick={() => startQuiz('intermediate')}
            >
              <div className="card-icon">🚀</div>
              <h3>Intermediate</h3>
              <p>CSS styling and responsive design</p>
              <div className="difficulty-bar">
                <div className="difficulty-fill intermediate-fill"></div>
              </div>
            </div>

            <div
              className="level-card advanced"
              onClick={() => startQuiz('advanced')}
            >
              <div className="card-icon">⚡</div>
              <h3>Advanced</h3>
              <p>Modern web technologies</p>
              <div className="difficulty-bar">
                <div className="difficulty-fill advanced-fill"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen
  if (quizCompleted) {
    const results = calculateResults();
    const percentage = Math.round((results.correct / results.total) * 100);
    const progressPercentage = (results.attempted / results.total) * 100;

    return (
      <div className="quiz-container flex justify-center items-center" style={{ minHeight: '100vh' }}>
        <div className="results-screen">
          <div className="results-header">
            <div className="result-emoji">{getResultEmoji(percentage)}</div>
            <h2 className="results-title">Quiz Completed!</h2>
            <p className="result-message">{getResultMessage(percentage)}</p>
          </div>

          <div className="results-stats">
            <div className="stat-card">
              <div className="stat-number">{results.correct}</div>
              <div className="stat-label">Correct</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{results.attempted}</div>
              <div className="stat-label">Attempted</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{percentage}%</div>
              <div className="stat-label">Score</div>
            </div>
          </div>

          <div className="progress-section">
            <h3>Your Progress</h3>
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <span className="progress-text">
                {results.attempted} of {results.total} questions completed
              </span>
            </div>
          </div>

          <div className="results-actions">
            <button className="btn btn-primary" onClick={resetQuiz}>
              <FaStar className="btn-icon" />
              Try Again
            </button>
            <button className="btn btn-secondary" onClick={() => window.location.reload()}>
              <FaTrophy className="btn-icon" />
              New Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  const currentQ = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const isDisabled = disabledQuestions.has(currentQuestion);

  return (
    <div className="quiz-container flex justify-center items-center min-h-screen bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 p-4">
      <div className="quiz-screen bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-4xl p-6 space-y-6">

        {/* Header */}
        <div className="quiz-header flex justify-between items-center">
          <div className="quiz-info flex items-center space-x-4">
            <span className="level-badge bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold px-3 py-1 rounded-full shadow-md">
              {selectedLevel}
            </span>
            <span className="question-counter text-white font-semibold bg-black bg-opacity-30 px-3 py-1 rounded-full shadow-inner">
              {currentQuestion + 1} / {totalQuestions}
            </span>
          </div>
          <div className="timer flex items-center space-x-2 text-white font-semibold">
            <FaClock className="timer-icon text-xl" />
            <span className={`timer-text ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : ''}`}>
              {timeLeft}s
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="question-progress h-2 bg-white bg-opacity-30 rounded-full overflow-hidden shadow-inner">
          <div
            className="progress-fill h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>

        {/* Question Section */}
        <div className="question-section bg-white p-6 rounded-2xl shadow-xl text-black">
          <h2 className="question-text text-xl sm:text-2xl font-bold mb-4">{currentQ.question}</h2>

          <div className="options-grid gap-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                className={`option-btn px-4 py-3 rounded-xl font-semibold shadow-lg transition-transform transform hover:scale-105 focus:outline-none
              bg-gradient-to-r from-gray-500  to-gray-300 text-white
              ${selectedAnswers[currentQuestion] === index ? 'ring-4 ring-yellow-400' : ''}
              ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => handleAnswerSelect(index)}
                disabled={isDisabled}
              >
                <span className="option-letter mr-2 font-bold">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="quiz-navigation flex justify-between items-center">
          <button
            className="nav-btn flex items-center space-x-2 bg-red-600 bg-opacity-30 text-white px-4 py-2 rounded-xl shadow-md hover:bg-opacity-50 transition"
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            <FaArrowLeft className="nav-icon" /> <span>Previous</span>
          </button>

          <div className="question-dots flex items-center space-x-2">
            {questions.slice(0, 10).map((_, index) => (
              <div
                key={index}
                className={`question-dot w-3 h-3 rounded-full transition-all ${index === currentQuestion ? 'bg-yellow-400 scale-125' : 'bg-white bg-opacity-50'
                  } ${selectedAnswers[index] !== undefined ? 'bg-green-400' : ''} ${disabledQuestions.has(index) ? 'opacity-40' : ''}`}
              ></div>
            ))}
            {totalQuestions > 10 && <span className="dots-more text-white font-bold">...</span>}
          </div>

          <button
            className="nav-btn flex items-center space-x-2 bg-green-500 bg-opacity-30 text-white px-4 py-2 rounded-xl shadow-md hover:bg-opacity-50 transition"
            onClick={handleNextQuestion}
            disabled={!isAnswered && timeLeft > 0}
          >
            <span>{currentQuestion === totalQuestions - 1 ? 'Finish' : 'Next'}</span>
            <FaArrowRight className="nav-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
