import * as React from 'react';
import { useEffect } from "react";
import { connect } from "react-redux";
import '../../../styles/quiz.scss';

import Questionslist from './quiz/Questionslist';
import Answeroptionslist from './quiz/Answeroptionslist';
import Answerdisplay from './quiz/Answerdisplay';
import Score from './quiz/Scoredisplay';

import {
  fetch_quiz,
  receive_specific_quiz,
  quiz_completed,
  set_selected_answer,
  set_field_validation,
  quiz_submitted,
  check_answer
} from '../actions';

interface IProps {
  quiz_details: Object[];
  totalQuestions: Number;
  questionsCounter: Number;
  question_id: Number;
  question: String;
  answers: Array<String>;
  correctAnswer: String;
  isQuizCompleted: Boolean;
  selectedAns: String;
  isQuizSubmitCompleted: Boolean;
  quizResult: Boolean;
  scoreAchieved: Number;
  isLoading: Boolean;
  isValid: Boolean;
  isPristine: Boolean;
}

export const Playquiz: React.FunctionComponent<IProps> = (props: any) => {
  const {
    quizdata,
    isLoading,
    isQuizCompleted,
    scoreAchieved,
    questionsCounter,
    totalQuestions,
    question,
    answers,
    question_id,
    correctAnswer,
    isQuizSubmitCompleted,
    quizResult,
    isValid,
    isPristine,
    selectedAns
  } = props;

  useEffect(() => {
    props.dispatch(fetch_quiz());
  }, [])

  const getQuizDetails = () => {
    if (questionsCounter+1 != totalQuestions) {
      props.dispatch(receive_specific_quiz(quizdata, questionsCounter));
    } else {
      props.dispatch(quiz_completed());
    }
  };

  const handleChange = evt => {
    props.dispatch(set_selected_answer(evt.target.value));
  };

  const validateField = (value) => {
    if (value === '') {
      props.dispatch(set_field_validation(false, false));
      return false;
    } else {
      props.dispatch(set_field_validation(true, false));
      return true;
    }
  }

  const handleQuizSubmitDoneButton = e => {
    e.preventDefault();
    const isDataValid = validateField(selectedAns);
    if (isDataValid) {
      if (correctAnswer === selectedAns) {
        props.dispatch(check_answer(true, scoreAchieved + 1));
      } else {
        props.dispatch(check_answer(false, scoreAchieved));
      }
      props.dispatch(quiz_submitted());
    }
  };

  const showButtons = () => {
    if (!isQuizSubmitCompleted) {
      return (
        <div>
          <br />
          <button type="submit" className="quizButton" value="Done">
            Done
          </button>
        </div>
      );
    }

    if (isQuizSubmitCompleted && !isQuizCompleted) {
      return (
        <div>
          <button className="playButton" onClick={getQuizDetails}>
            Next >>
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="quizContainer">
        {isLoading ? (
          <div className="contentWrapper LoadingHead">Loading...</div>
        ) : (
            <div className="container">
              {!isQuizCompleted ? (
                <div className="playQuiz">
                  <div className="contentWrapper">
                    <div className="detailscard">
                      <div className="row">
                        <p className="col-md-6">
                          Total score:
                          <span> {scoreAchieved} </span>
                        </p>
                        <p className="col-md-6">
                          Question no:
                          <span>
                            {questionsCounter} out of {totalQuestions}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <form className="quizCard" onSubmit={handleQuizSubmitDoneButton}>
                    <div key={question_id}>
                      <div className="questionHead">
                        <Questionslist questionsList={question} />
                      </div>
                      <hr />
                      {!isValid && !isPristine ? (
                        <p className="errorMessageDisplay text-danger"> Please select answer. </p>
                      ) : null}
                      <div className="answerList">
                        <Answeroptionslist
                          answerList={answers}
                          question_id={question_id}
                          change={handleChange}
                        />
                      </div>
                      <div className="answerDisplay">
                        {isQuizSubmitCompleted ? (
                          <div>
                            {quizResult ? (
                              <div>
                                <div className="text-success"> Correct Answer </div>
                              </div>
                            ) : (
                                <div>
                                  <Answerdisplay correctAnswer={correctAnswer} />
                                </div>
                              )}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="quizButtonWrapper">{showButtons()}</div>
                  </form>
                </div>
              ) : (
                  <div className="scoreAchieved">
                    <Score scoreAchieved={scoreAchieved} totalQuestions={totalQuestions} />
                  </div>
                )}
            </div>
          )}
      </div>
    </div>
  );
}

const mapStateToProps = (store: any) => ({
  quizdata: store.quizdata,
  isLoading: store.isLoading,
  isQuizCompleted: store.isQuizCompleted,
  scoreAchieved: store.scoreAchieved,
  questionsCounter: store.questionsCounter,
  totalQuestions: store.totalQuestions,
  question: store.question,
  answers: store.answers,
  question_id: store.question_id,
  correctAnswer: store.correctAnswer,
  isQuizSubmitCompleted: store.isQuizSubmitCompleted,
  quizResult: store.quizResult,
  isValid: store.isValid,
  isPristine: store.isPristine,
  selectedAns: store.selectedAns,
});

export default connect(mapStateToProps)(Playquiz);
