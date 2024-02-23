import React, { useState } from 'react';
import './App.css';
import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import { Route, useNavigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import ResultComponent from "./components/ResultComponent";
import Data from "./resources/Questions.json";

function App() {
  const [ques, setQues] = useState(0);
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const result = useNavigate();

  const clickNext = () => {
    if (ques < Data.length - 1) {
      setQues((prevQues) => prevQues + 1);
    } else if (ques >= Data.length - 1) {
      result("/result");
    }
  };

  const clickPrev = () => {
    if (ques > 0) {
      setQues((prevQues) => prevQues - 1);
    }
  };

  const clickQuit = () => {
    if (window.confirm("Are you sure that you want to quit?")) {
      result("/result");
    }
  };

  const calculateScore = (e) => {
    setAttempt((prevAttempt) => prevAttempt + 1);
    if (e.target.innerHTML === Data[ques].answer) {
      alert("Correct answer");
      setScore((prevScore) => prevScore + 1);
    } else {
      alert("Wrong answer");
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route
          path="/quiz"
          element={
            <QuizComponent
              clickNext={clickNext}
              clickPrev={clickPrev}
              clickQuit={clickQuit}
              ques={ques}
              index={Data[ques]}
              calculateScore={calculateScore}
            />
          }
        />
        <Route
          path="/result"
          element={<ResultComponent score={score} attempt={attempt} />}
        />
      </Routes>
    </div>
  );
}

export default App;
