import axios from 'axios';

export const getQuiz = async () => {
  const response = await axios.get(`http://localhost:8080/api/quiz`);
  return response.data;
};
