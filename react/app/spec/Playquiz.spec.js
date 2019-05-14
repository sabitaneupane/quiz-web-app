import { shallow } from 'enzyme';
import * as React from 'react';

import Playquiz from '../component/Playquiz';

let fetchData;
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
            expect(wrapper.state().quizSubmitCompleted).toBeDefined();
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
            expect(wrapper.state().quizSubmitCompleted).toEqual(false);
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
            fetchData = jest.spyOn(Playquiz.prototype, 'fetchData').mockImplementation(() => true);
        });

        afterAll(() => {
            fetchData.mockRestore();
        });

        it('should fetch fetchData', () => {
            shallow(<Playquiz />)
            expect(fetchData.mock.calls.length).toBe(1);
        });
    });

    describe('Function handleChange', () => {
        const wrapper = shallow(<Playquiz />);

        it('Should set value on handleChange', () => {
            wrapper.instance().handleChange({ target: { value: '1234567890123' } });
            expect(wrapper.state().selectedAns).toBe('1234567890123');
        });
    });

    describe('Function handleQuizSubmitDoneButton', () => {
        it('Should set value true on quizSubmitCompleted', () => {
            const wrapper = shallow(<Playquiz />);
            wrapper.instance().handleQuizSubmitDoneButton({ preventDefault: jest.fn() });
            expect(wrapper.state().quizSubmitCompleted).toBe(true);
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
});

