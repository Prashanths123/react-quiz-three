import React from 'react';
import Data from "../resources/Questions.json";
import { Link } from 'react-router-dom';

const QuizComponent = ({ ques, clickNext, clickPrev, clickQuit, index, calculateScore }) => {

  return (
    <>
      <div id="question">
        <div>
          <h2>Question</h2>
        </div>
        <div className='no'>
          <span>{ques + 1} </span>
          of <span>{Data.length}</span>
        </div>
        <div className='ques'>{index.question}</div>

        <div className="options">
          <div onClick={(e) => {
            calculateScore(e);
            console.log(e);
          }}>{index.optionA}</div>
          <div onClick={(e) => calculateScore(e)}>{index.optionB}</div>
          <div onClick={(e) => calculateScore(e)}>{index.optionC}</div>
          <div onClick={(e) => calculateScore(e)}>{index.optionD}</div>
        </div>

        <div className="buttons">
          <div onClick={clickPrev}>Previous</div>
          <div onClick={clickNext}>Next</div>
          <div onClick={clickQuit}>Quit</div>
          <Link to="/result">
            <div>Finish</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuizComponent;
