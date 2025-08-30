import React, { useState, useEffect, useCallback, useMemo } from "react";

const JSQuize = () => {
  const [showTimeAlert, setShowTimeAlert] = useState(false);
  const [activeLevel, setActiveLevel] = useState("beginner");
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showResultModal, setShowResultModal] = useState(false);

  const htmlContent = useMemo(() => ({
    beginner: {
      title: "Beginner Level CSS Quiz",
      topics: [
        {
          title: "CSS Basics",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "What does CSS stand for?",
              options: [
                "Computer Style Sheets",
                "Creative Style System",
                "Cascading Style Sheets",
                "Colorful Style Sheets",
              ],
              correctAnswer: 2,
            },
            {
              question: "Which HTML attribute is used to define inline styles?",
              options: ["class", "styles", "font", "style"],
              correctAnswer: 3,
            },
            {
              question: "Which property is used to change the background color?",
              options: ["color", "bgcolor", "background-color", "background"],
              correctAnswer: 2,
            },
            {
              question: "How do you add a comment in CSS?",
              options: [
                "// this is a comment //",
                "/* this is a comment */",
                "<!-- this is a comment -->",
                "' this is a comment",
              ],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "CSS Selectors",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which symbol is used to select a class in CSS?",
              options: ["#", ".", "*", "&"],
              correctAnswer: 1,
            },
            {
              question: "Which selector selects all <p> elements?",
              options: ["p", ".p", "#p", "*"],
              correctAnswer: 0,
            },
          ],
        },
      ],
    },
    intermediate: {
      title: "Intermediate Level CSS Quiz",
      topics: [
        {
          title: "Box Model",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which CSS property sets the space outside the border?",
              options: ["margin", "padding", "border", "space"],
              correctAnswer: 0,
            },
          ],
        },
      ],
    },
    advanced: {
      title: "Advanced Level CSS Quiz",
      topics: [
        {
          title: "Flexbox",
          explanation: `<div class='flex justify-center items-center mt-9'><p class="text-xl font-semibold text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg">Please select the Chapter to start the Quiz</p> </div>`,
          quizData: [
            {
              question: "Which property defines the main axis direction?",
              options: ["flex-wrap", "flex-direction", "justify-content", "align-items"],
              correctAnswer: 1,
            },
          ],
        },
      ],
    },
  }), []);

  const questions = useMemo(() => {
    return htmlContent[activeLevel].topics[activeTopicIndex].quizData || [];
  }, [htmlContent, activeLevel, activeTopicIndex]);

  useEffect(() => {
    setShowTimeAlert(false);
  }, [currentQuestion]);

  useEffect(() => {
    if (
      quizStarted &&
      !quizFinished &&
      timeLeft === 10 &&
      selectedAnswer === null
    ) {
      setShowTimeAlert(true);
      const timer = setTimeout(() => {
        setShowTimeAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, quizStarted, quizFinished, selectedAnswer]);

  useEffect(() => {
    if (selectedAnswer !== null && showTimeAlert) {
      setShowTimeAlert(false);
    }
  }, [selectedAnswer, showTimeAlert]);

  useEffect(() => {
    if (quizStarted && !quizFinished) {
      setTimeLeft(30);
    }
  }, [currentQuestion, quizStarted, quizFinished]);

  const handleNextQuestion = useCallback(() => {
    setShowTimeAlert(false);

    if (answers[currentQuestion] === undefined) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [currentQuestion]: selectedAnswer
      }));

      if (selectedAnswer !== null && selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore((prev) => prev + 1);
      }
    }

    if (currentQuestion < questions.length - 1) {
      const nextQ = currentQuestion + 1;
      setCurrentQuestion(nextQ);
      setSelectedAnswer(answers[nextQ] ?? null);
    } else {
      setQuizFinished(true);
    }
  }, [selectedAnswer, currentQuestion, answers, questions]);

  // Timer useEffect کو modify کریں
  useEffect(() => {
    if (!quizStarted || quizFinished) return;

    if (timeLeft === 0) {
      // Timer کو clear کریں پہلے
      const timer = setTimeout(() => {
        handleNextQuestion();
      }, 100); // Small delay to prevent double execution

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, quizStarted, quizFinished, handleNextQuestion]);


  useEffect(() => {
    if (quizFinished) {
      setShowResultModal(true);
    }
  }, [quizFinished]);

  const handleTopicClick = (index) => {
    setActiveTopicIndex(index);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizFinished(false);
    setAnswers({});
    setShowTimeAlert(false);
  };

  const handleAnswerSelect = (index) => {
    if (answers[currentQuestion] !== undefined) return;
    setSelectedAnswer(index);
  };

  const handlePreviousQuestion = () => {
    setShowTimeAlert(false);

    if (currentQuestion > 0) {
      const prevQ = currentQuestion - 1;
      setCurrentQuestion(prevQ);
      setSelectedAnswer(answers[prevQ] ?? null);
    }
  };

  const handleResetQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setSelectedAnswer(null);
    setAnswers({});
    setScore(0);
    setShowResultModal(false);
    setShowTimeAlert(false);
  };

  const isCurrentQuestionAnswered = answers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <header className="container mx-auto text-center mb-8 p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl shadow-lg mt-28">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Complete CSS Learning Quiz
        </h1>
        <p className="text-sm sm:text-base lg:text-lg opacity-90">
          Master CSS from Beginner to Advanced Level through interactive quizzes,
        </p>
      </header>

      <div className={`${quizStarted && !quizFinished ? "app-disabled" : ""}`}>
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-8 max-w-5xl mx-auto container">
          {Object.keys(htmlContent).map((level) => (
            <button
              key={level}
              className={`p-3 sm:p-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${activeLevel === level
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              onClick={() => {
                setActiveLevel(level);
                setActiveTopicIndex(0);
                setQuizStarted(false);
                setQuizFinished(false);
                setAnswers({});
                setScore(0);
                setSelectedAnswer(null);
                setShowTimeAlert(false);
              }}
            >
              {htmlContent[level].title}
            </button>
          ))}
        </nav>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className={`lg:col-span-1 bg-white rounded-xl shadow-lg p-4 sm:p-6 h-fit lg:sticky lg:top-6 ${quizStarted && !quizFinished ? "app-disabled" : ""}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
            {htmlContent[activeLevel].title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {htmlContent[activeLevel].topics.map((topic, index) => (
              <button
                key={index}
                className={`p-3 text-left rounded-lg transition-all duration-300 text-sm ${activeTopicIndex === index
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                onClick={() => handleTopicClick(index)}
              >
                {topic.title}
              </button>
            ))}
          </div>
        </aside>

        <main className="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden p-6">
          {!quizStarted && (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{
                __html:
                  htmlContent[activeLevel].topics[activeTopicIndex]
                    ?.explanation || "<p>No topic explanation available.</p>",
              }}
            />
          )}

          {quizStarted && !quizFinished && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Question {currentQuestion + 1} of {questions.length}
                </h2>
                <div className="flex items-center bg-red-100 text-red-700 py-1 px-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 mr-2 fill-current"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 296c0-13.3 10.7-24 24-24s24 10.7 24 24v128c0 13.3-10.7 24-24 24s-24-10.7-24-24V296z" /></svg>
                  <span className="font-medium">{timeLeft}s</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border transition-all duration-200 ${selectedAnswer === index
                        ? "border-blue-500 bg-blue-50"
                        : isCurrentQuestionAnswered
                          ? "border-gray-300 bg-gray-100"
                          : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                        } ${isCurrentQuestionAnswered
                          ? "cursor-not-allowed opacity-75"
                          : "cursor-pointer"
                        }`}
                      onClick={() => {
                        if (!isCurrentQuestionAnswered) {
                          handleAnswerSelect(index);
                        }
                      }}
                    >
                      <div className="flex items-center select-none">
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${selectedAnswer === index
                            ? "border-blue-500 bg-blue-500 text-white"
                            : "border-gray-400"
                            }`}
                        >
                          {selectedAnswer === index && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 fill-current"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                          )}
                        </div>
                        <span className={isCurrentQuestionAnswered ? "text-gray-600" : ""}>
                          {option}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className={`flex items-center py-2 px-4 rounded-lg ${currentQuestion === 0
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 mr-2 fill-current"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.2l105.5-105.5c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                  Previous
                </button>

                <button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null && !isCurrentQuestionAnswered}
                  className={`flex items-center py-2 px-4 rounded-lg ${selectedAnswer === null && !isCurrentQuestionAnswered
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    }`}
                >
                  {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 ml-2 fill-current"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H338.8l-105.5 105.5c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </button>
              </div>
            </>
          )}
        </main>
      </div>

      {showTimeAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-6 py-4 rounded-lg shadow-xl z-50 border-2 border-yellow-500 animate-bounce">
          <div className="flex items-center font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 mr-2 fill-current"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 296c0-13.3 10.7-24 24-24s24 10.7 24 24v128c0 13.3-10.7 24-24 24s-24-10.7-24-24V296z" /></svg>
            <span>Only 10 seconds left! Please select an option.</span>
          </div>
        </div>
      )}

      {showResultModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-lg text-center relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
              onClick={() => setShowResultModal(false)}
              aria-label="Close results modal"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Quiz Results</h2>
            <div className="text-xl mb-4">
              You scored {score} out of {questions.length}
            </div>
            <div className="text-lg mb-6">
              Percentage: {((score / questions.length) * 100).toFixed(2)}%
            </div>

            <div className="w-full bg-gray-300 rounded-full h-6 mb-6 overflow-hidden">
              <div
                className="bg-blue-600 h-6 flex items-center justify-center text-white font-semibold transition-all duration-500"
                style={{ width: `${(score / questions.length) * 100}%` }}
              >
                {(score / questions.length) * 100 >= 50 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 h-3 mr-2 fill-current"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3 mr-2 fill-current"><path d="M400 240H112c-8.8 0-16 7.2-16 16s7.2 16 16 16H400c8.8 0 16-7.2 16-16s-7.2-16-16-16z" /></svg>
                )}
                {((score / questions.length) * 100).toFixed(2)}%
              </div>
            </div>

            <button
              onClick={() => {
                setShowResultModal(false);
                handleResetQuiz();
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Close & Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JSQuize;
