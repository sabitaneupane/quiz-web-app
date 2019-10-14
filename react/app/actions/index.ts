const SET_NEW_QUIZ_GAME = "SET_NEW_QUIZ_GAME";
const FETCH_QUIZ = "FETCH_QUIZ";
const FETCHED_QUIZ_SUCCESS = "FETCHED_QUIZ_SUCCESS";
const FETCHED_QUIZ_FAILED = "FETCHED_QUIZ_FAILED";
const TOTAL_SCORE_COUNT = "TOTAL_SCORE_COUNT";
const IS_QUIZ_COMPLETED = "IS_QUIZ_COMPLETED";
const FETCH_SPECITIC_QUIZ = "FETCH_SPECITIC_QUIZ";
const SET_SELECTED_ANSWER = "SET_SELECTED_ANSWER";
const SET_FIELD_VALIDATION = "SET_FIELD_VALIDATION";
const IS_QUIZ_SUBMITTED = "IS_QUIZ_SUBMITTED";
const IS_ANSWER_CORRECT = "IS_ANSWER_CORRECT";

export const set_quiz_game = () => {
  return {
    type: SET_NEW_QUIZ_GAME
  };
};

export const fetch_quiz = () => {
  return {
    type: FETCH_QUIZ
  };
};

export const receive_quiz = (response: object) => {
  return {
    type: FETCHED_QUIZ_SUCCESS,
    payload: response
  };
};

export const receive_error = () => {
  return {
    type: FETCHED_QUIZ_FAILED
  };
};

export const receive_specific_quiz = (quizdata: any, questionsCounter: number) => {
  return {
    type: FETCH_SPECITIC_QUIZ,
    payload: {
      quizdata,
      questionsCounter
    }
  };
};

export const score_count = () => {
  return {
    type: TOTAL_SCORE_COUNT
  };
};

export const quiz_completed = () => {
  return {
    type: IS_QUIZ_COMPLETED
  };
};

export const set_selected_answer = (answer : string) => {
  return {
    type: SET_SELECTED_ANSWER,
    payload: answer
  };
};

export const set_field_validation = (isValid : boolean, isPristine: boolean) => {
  return {
    type: SET_FIELD_VALIDATION,
    payload: {
      isValid,
      isPristine
    }
  };
};

export const quiz_submitted = () => {
  return {
    type: IS_QUIZ_SUBMITTED
  };
};


export const check_answer = (quizResult: boolean, scoreAchieved: number) => {
  return {
    type: IS_ANSWER_CORRECT,
    payload: {
      quizResult,
      scoreAchieved
    }
  };
};
