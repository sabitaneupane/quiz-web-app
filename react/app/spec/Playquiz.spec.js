import { shallow } from 'enzyme';
import * as React from 'react';
import moxios from 'moxios';

import Playquiz from '../component/Playquiz';

let datafetch;

const quiz = {
  quiz: [
    {
      question_id: 1,
      question: 'question 1',
      answers: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correctAnswer: 'Option 1',
    },
    {
      question_id: 2,
      question: 'question 2',
      answers: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correctAnswer: 'Option 3',
    },
  ],
};

describe('<Playquiz />', () => {
  describe('States are defined', () => {
    const wrapper = shallow(<Playquiz />);
    it('Should have mentioned states', () => {
      expect(wrapper.state().quiz_details).toBeDefined();
      expect(wrapper.state().totalQuestions).toBeDefined();
      expect(wrapper.state().questionsCounter).toBeDefined();
      expect(wrapper.state().question_id).toBeDefined();
      expect(wrapper.state().question).toBeDefined();
      expect(wrapper.state().answers).toBeDefined();
      expect(wrapper.state().correctAnswer).toBeDefined();
      expect(wrapper.state().isQuizCompleted).toBeDefined();
      expect(wrapper.state().selectedAns).toBeDefined();
      expect(wrapper.state().isQuizSubmitCompleted).toBeDefined();
      expect(wrapper.state().quizResult).toBeDefined();
      expect(wrapper.state().scoreAchieved).toBeDefined();
      expect(wrapper.state().isLoading).toBeDefined();
    });

    it('Should have default value for states', () => {
      expect(wrapper.state().quiz_details).toEqual([]);
      expect(wrapper.state().totalQuestions).toEqual(0);
      expect(wrapper.state().questionsCounter).toEqual(0);
      expect(wrapper.state().question_id).toEqual(0);
      expect(wrapper.state().question).toEqual('');
      expect(wrapper.state().answers).toEqual([]);
      expect(wrapper.state().correctAnswer).toEqual('');
      expect(wrapper.state().isQuizCompleted).toEqual(false);
      expect(wrapper.state().selectedAns).toEqual('');
      expect(wrapper.state().isQuizSubmitCompleted).toEqual(false);
      expect(wrapper.state().quizResult).toEqual(false);
      expect(wrapper.state().scoreAchieved).toEqual(0);
      expect(wrapper.state().isLoading).toEqual(true);
    });
  });

  describe('Correct elements are present when isLoading is true', () => {
    const wrapper = shallow(<Playquiz />);

    it('Should have given classes and text', () => {
      expect(wrapper.find('.LoadingHead')).toHaveLength(1);
      expect(wrapper.find('.LoadingHead').text()).toBe('Loading...');
    });

    it('Should have given classes and elements when isLoading is false and sQuizCompleted is false', () => {
      wrapper.setState({ isLoading: false, isQuizCompleted: false });
      expect(wrapper.find('.container')).toHaveLength(1);
      expect(wrapper.find('.playQuiz')).toHaveLength(1);
      expect(wrapper.find('.detailscard')).toHaveLength(1);
      expect(wrapper.find('.quizCard')).toHaveLength(1);
      expect(wrapper.find('.questionHead')).toHaveLength(1);
      expect(wrapper.find('.answerList')).toHaveLength(1);
      expect(wrapper.find('.answerDisplay')).toHaveLength(1);
      expect(wrapper.find('.quizButtonWrapper')).toHaveLength(1);
      expect(wrapper.find('form')).toHaveLength(1);
    });

    it('Correct elements are present when isLoading is false and QuizCompleted is true', () => {
      wrapper.setState({ isLoading: false, isQuizCompleted: true });
      expect(wrapper.find('.scoreAchieved')).toHaveLength(1);
    });
  });

  describe('Function componentDidMount', () => {
    const wrapper = shallow(<Playquiz />);

    beforeAll(() => {
      datafetch = jest.spyOn(Playquiz.prototype, 'fetchData').mockImplementation(() => true);
    });

    afterAll(() => {
      datafetch.mockRestore();
    });

    it('should fetch fetchData', () => {
      wrapper.instance().fetchData();
      expect(datafetch.mock.calls.length).toBe(1);
    });
  });

  describe('Function handleChange', () => {
    const wrapper = shallow(<Playquiz />);

    it('Should set value on handleChange', () => {
      wrapper.instance().handleChange({ target: { value: '1234567890123' } });
      expect(wrapper.state().selectedAns).toBe('1234567890123');
    });
  });

  describe('Function validateField', () => {
    const wrapper = shallow(<Playquiz />);

    it('Should return isValid false if value is empty', () => {
      const value = '';
      wrapper.instance().validateField(value);
      expect(wrapper.state().isValid).toBe(false);
      expect(wrapper.state().isPristine).toBe(false);
    });
    it('Should return isValid false if value is not empty', () => {
      const value = 'option 3';
      wrapper.instance().validateField(value);
      expect(wrapper.state().isValid).toBe(true);
      expect(wrapper.state().isPristine).toBe(false);
    });
  });

  describe('Function handleQuizSubmitDoneButton', () => {
    it('Should set value true on isQuizSubmitCompleted', () => {
      const wrapper = shallow(<Playquiz />);
      wrapper.setState({ selectedAns: '3' });
      wrapper.instance().handleQuizSubmitDoneButton({ preventDefault: jest.fn() });
      expect(wrapper.state().isQuizSubmitCompleted).toBe(true);
    });

    it('Should set value when correctAnswer matches with selectedAns', () => {
      const wrapper = shallow(<Playquiz />);
      wrapper.setState({ correctAnswer: '3', selectedAns: '3', scoreAchieved: 3 });
      wrapper.instance().handleQuizSubmitDoneButton({ preventDefault: jest.fn() });
      expect(wrapper.state().quizResult).toBe(true);
      expect(wrapper.state().scoreAchieved).toBe(4);
    });

    it('Should set value when correctAnswer doesnot matches with selectedAns', () => {
      const wrapper = shallow(<Playquiz />);
      wrapper.setState({ correctAnswer: '2', selectedAns: '3' });
      wrapper.instance().handleQuizSubmitDoneButton({ preventDefault: jest.fn() });
      expect(wrapper.state().quizResult).toBe(false);
    });
  });

  describe('Function getQuizDetails', () => {
    it('Should set value when questionsCounter doesnot matches with totalQuestions', () => {
      const wrapper = shallow(<Playquiz />);
      wrapper.setState({ questionsCounter: 1, totalQuestions: 3, quiz_details: quiz.quiz });
      wrapper.instance().getQuizDetails();
      expect(wrapper.state().questionsCounter).toBe(2);
      expect(wrapper.state().question_id).toBe(2);
      expect(wrapper.state().question).toBe('question 2');
      expect(wrapper.state().answers).toEqual(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
      expect(wrapper.state().correctAnswer).toBe('Option 3');
      expect(wrapper.state().isQuizSubmitCompleted).toBe(false);
    });

    it('Should set value when questionsCounter matches with totalQuestions', () => {
      const wrapper = shallow(<Playquiz />);
      wrapper.setState({ questionsCounter: 3, totalQuestions: 3 });
      wrapper.instance().getQuizDetails();
      expect(wrapper.state().isQuizCompleted).toBe(true);
    });
  });

  describe('Function showButtons', () => {
    it('Should render done button when isQuizSubmitCompleted is false', () => {
      const wrapper = shallow(<Playquiz />);
      wrapper.setState({ isQuizSubmitCompleted: false, isLoading: false, isQuizCompleted: false });
      wrapper.instance().showButtons();
      expect(wrapper.find('.quizButton')).toHaveLength(1);
      expect(wrapper.find('.quizButton').text()).toBe('Done');
    });

    it('Should render next button when isQuizSubmitCompleted is true and isQuizCompleted is false', () => {
      const wrapper = shallow(<Playquiz />);
      wrapper.setState({ isQuizSubmitCompleted: true, isLoading: false, isQuizCompleted: false });
      wrapper.instance().showButtons();
      expect(wrapper.find('.playButton')).toHaveLength(1);
      expect(wrapper.find('.playButton').text()).toBe('Next >>');
    });
  });
});
