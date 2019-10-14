import axios from 'axios';

const localURL = "http://localhost:8080/api/quiz";
const apiURL = "https://sabitaneupane.github.io/sample-json-data/simple/quiz.json";

export const getQuiz = async () => {
  const response = await axios.get(apiURL);
  return response.data;
};
