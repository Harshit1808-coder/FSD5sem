import React, { useState, useEffect } from "react";
import "./App.css";

const TIME_LIMIT = 30; // seconds per question

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.log(error));
  }, []);

  // countdown: ticks every second while a question is open
  useEffect(() => {
    if (questions.length === 0 || submitted || result) return;

    const id = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(id);
  }, [questions.length, index, submitted, result]);

  // when time runs out, lock the question automatically
  useEffect(() => {
    if (questions.length === 0 || submitted || result) return;
    if (timeLeft !== 0) return;

    if (selected !== "" && selected === questions[index].correct_answer) {
      setScore((s) => s + 1);
    }
    setTimedOut(true);
    setSubmitted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  function submitAnswer() {
    if (selected === "") {
      alert("Please select an answer");
      return;
    }

    if (selected === questions[index].correct_answer) {
      setScore(score + 1);
    }

    setSubmitted(true);
  }

  function nextQuestion() {
    if (index === questions.length - 1) {
      setResult(true);
    } else {
      setIndex(index + 1);
      setSelected("");
      setSubmitted(false);
      setTimedOut(false);
      setTimeLeft(TIME_LIMIT);
    }
  }

  function optionClass(option) {
    let cls = "option";
    if (submitted) {
      if (option === questions[index].correct_answer) cls += " correct";
      else if (option === selected) cls += " wrong";
    }
    return cls;
  }

  if (questions.length === 0) {
    return <h2>Loading Questions...</h2>;
  }

  const isLast = index === questions.length - 1;

  return (
    <div className="container">
      <h1>Quiz App</h1>

      {result ? (
        <>
          <h2>Quiz Completed!</h2>
          <h3>
            Your Score: {score}/{questions.length}
          </h3>
          <button onClick={() => window.location.reload()}>
            Restart Quiz
          </button>
        </>
      ) : (
        <>
          <div className="timer-row">
            <h3>
              Question {index + 1} of {questions.length}
            </h3>
            <span className={timeLeft <= 10 ? "timer low" : "timer"}>
              ⏱ {timeLeft}s
            </span>
          </div>

          <div className="timer-bar">
            <div
              className={timeLeft <= 10 ? "timer-fill low" : "timer-fill"}
              style={{ width: `${(timeLeft / TIME_LIMIT) * 100}%` }}
            />
          </div>

          <h2>{questions[index].question}</h2>

          {questions[index].options.map((option) => (
            <label className={optionClass(option)} key={option}>
              <input
                type="radio"
                name="answer"
                checked={selected === option}
                disabled={submitted}
                onChange={() => setSelected(option)}
              />
              <span>{option}</span>
            </label>
          ))}

          {timedOut && <p className="time-up">Time's up!</p>}

          {!submitted ? (
            <button onClick={submitAnswer}>Submit</button>
          ) : (
            <button onClick={nextQuestion}>
              {isLast ? "Finish" : "Next"}
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default App;