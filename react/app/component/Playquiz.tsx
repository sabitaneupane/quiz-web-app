import * as React from 'react';
import '../../../styles/quiz.scss';

import { NavLink } from 'react-router-dom';

import Questionslist from './quiz/Questionslist';
import Answeroptionslist from './quiz/Answeroptionslist';
import Answerdisplay from './quiz/Answerdisplay';
import Score from './quiz/Score';

import axios from 'axios';

interface IState {
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

class Playquiz extends React.Component<any, IState> {
  public readonly state = {
    quiz_details: [],
    totalQuestions: 0,
    questionsCounter: 0,
    question_id: 0,
    question: '',
    answers: [],
    correctAnswer: '',
    isQuizCompleted: false,
    selectedAns: '',
    isQuizSubmitCompleted: false,
    quizResult: false,
    scoreAchieved: 0,
    isLoading: true,
    isValid: false,
    isPristine: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  public fetchData() {
    axios
      .get('http://localhost:8080/api/quiz')
      .then(response => {
        this.setState({
          quiz_details: response.data.quiz,
          totalQuestions: response.data.quiz.length,
          isLoading: false,
        });
        this.getQuizDetails();
      })
      .catch(error => {
        console.log(error);
      });
  }

  public handleChange = evt => {
    this.setState({
      selectedAns: evt.target.value,
    });
  };

  public validateField(value) {
    if (value === '') {
      this.setState({
        isValid: false,
        isPristine: false,
      });
      return false;
    } else {
      this.setState({
        isValid: true,
        isPristine: false,
      });
      return true;
    }
  }

  public handleQuizSubmitDoneButton = e => {
    e.preventDefault();
    const { correctAnswer, selectedAns, scoreAchieved } = this.state;
    const isDataValid = this.validateField(selectedAns);
    if (isDataValid) {
      if (correctAnswer === selectedAns) {
        this.setState({
          quizResult: true,
          scoreAchieved: scoreAchieved + 1,
        });
      } else {
        this.setState({
          quizResult: false,
        });
      }

      this.setState({
        isQuizSubmitCompleted: true,
      });
    }
  };

  public getQuizDetails = () => {
    const { questionsCounter, totalQuestions, quiz_details } = this.state;

    if (questionsCounter != totalQuestions) {
      this.setState({
        questionsCounter: questionsCounter + 1,
        question_id: quiz_details[questionsCounter].question_id,
        question: quiz_details[questionsCounter].question,
        answers: quiz_details[questionsCounter].answers,
        correctAnswer: quiz_details[questionsCounter].correctAnswer,
        isQuizSubmitCompleted: false,
        selectedAns: '',
        isValid: false,
        isPristine: true,
      });
    } else {
      this.setState({
        isQuizCompleted: true,
      });
    }
  };

  public showButtons = () => {
    const { isQuizSubmitCompleted, isQuizCompleted } = this.state;

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
          <button className="playButton" onClick={this.getQuizDetails}>
            Next >>
          </button>
        </div>
      );
    }
  };

  render() {
    const {
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
    } = this.state;

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

                    <form className="quizCard" onSubmit={this.handleQuizSubmitDoneButton}>
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
                            change={this.handleChange}
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

                      <div className="quizButtonWrapper">{this.showButtons()}</div>
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
}

export default Playquiz;
