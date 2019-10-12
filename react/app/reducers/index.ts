const initialState = {
  quizdata: {},
  question_id: 0,
  question: '',
  answers: [],
  correctAnswer: '',
  isLoading: false,
  isError: false,
  isValid: false,
  isPristine: true,
  totalQuestions: 0,
  questionsCounter: 0,
  isQuizCompleted: false,
  selectedAns: '',
  isQuizSubmitCompleted: false,
  quizResult: false,
  scoreAchieved: 0,
};

const asyncReducer = (state = initialState, action: any) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SET_NEW_QUIZ_GAME":
      newState.quizdata = {};
      newState.question_id = 0;
      newState.question = '';
      newState.answers = [];
      newState.correctAnswer = '';
      newState.isLoading = false;
      newState.isError = false;
      newState.isValid = false;
      newState.isPristine = true;
      newState.totalQuestions = 0;
      newState.questionsCounter = 0;
      newState.isQuizCompleted = false;
      newState.selectedAns = '';
      newState.isQuizSubmitCompleted = false;
      newState.quizResult = false;
      newState.scoreAchieved = 0;
      return newState;
    case "FETCH_QUIZ":
      newState.quizdata = {};
      newState.isLoading = true;
      newState.isError = false;
      return newState;
    case "FETCHED_QUIZ_SUCCESS":
      newState.quizdata = action.payload;
      newState.isLoading = false;
      newState.isError = false;
      newState.totalQuestions = newState.quizdata.quiz.length;
      newState.question_id = action.payload.quiz[0].question_id;
      newState.question = action.payload.quiz[0].question;
      newState.answers = action.payload.quiz[0].answers;
      newState.correctAnswer = action.payload.quiz[0].correctAnswer;
      newState.questionsCounter++;
      newState.isQuizSubmitCompleted = false;
      newState.selectedAns = '';
      newState.isValid = false;
      newState.isPristine = true;
      return newState;
    case "FETCHED_QUIZ_FAILED":
      newState.isLoading = false;
      newState.isError = true;
      return newState;
    case "FETCH_SPECITIC_QUIZ":
      const { quizdata, questionsCounter } = action.payload;
      newState.questionsCounter++;
      newState.question_id = quizdata.quiz[questionsCounter].question_id;
      newState.question = quizdata.quiz[questionsCounter].question;
      newState.answers = quizdata.quiz[questionsCounter].answers;
      newState.correctAnswer = quizdata.quiz[questionsCounter].correctAnswer;
      newState.isQuizSubmitCompleted = false;
      newState.selectedAns = '';
      newState.isValid = false;
      newState.isPristine = true;
      return newState;
    case "TOTAL_SCORE_COUNT":
      newState.scoreAchieved++;
      return newState;
    case "IS_QUIZ_COMPLETED":
      newState.isQuizCompleted = true;
      return newState;
    case "SET_SELECTED_ANSWER":
      newState.selectedAns = action.payload;
      return newState;
    case "IS_QUIZ_SUBMITTED":
      newState.isQuizSubmitCompleted = true;
      return newState;
    case "SET_FIELD_VALIDATION":
      newState.isValid = action.payload.isValid;
      newState.isPristine = action.payload.isPristine;
      return newState;
    case "IS_ANSWER_CORRECT":
      newState.quizResult = action.payload.quizResult;
      newState.scoreAchieved = action.payload.scoreAchieved;
      return newState;
    default:
      return state;
  }
};

export default asyncReducer;
