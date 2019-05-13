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

        it('should render LoadingHead with appropriate text', () => {
            expect(wrapper.find('.LoadingHead').text()).toBe('Loading...');
        });

        it('Should have given classes', () => {
            expect(wrapper.find('.LoadingHead')).toHaveLength(1);
        });
    });

    describe('Correct elements are present when isLoading is false', () => {
        describe('Correct elements are present when isQuizCompleted is false', () => {
            const wrapper = shallow(<Playquiz />);
            wrapper.setState({ isLoading: false, isQuizCompleted: false });

            it('Should have given classes', () => {
                expect(wrapper.find('.container')).toHaveLength(1);
                expect(wrapper.find('.playQuiz')).toHaveLength(1);
                expect(wrapper.find('.detailscard')).toHaveLength(1);
                expect(wrapper.find('.quizCard')).toHaveLength(1);
                expect(wrapper.find('.questionHead')).toHaveLength(1);
                expect(wrapper.find('.answerList')).toHaveLength(1);
                expect(wrapper.find('.answerDisplay')).toHaveLength(1);
                expect(wrapper.find('.quizButtonWrapper')).toHaveLength(1);
            });

            it('Should have given elements', () => {
                expect(wrapper.find('form')).toHaveLength(1);
            });
        });

        describe('Correct elements are present when isQuizCompleted is true', () => {
            const wrapper = shallow(<Playquiz />);
            wrapper.setState({ isLoading: false, isQuizCompleted: true });

            it('Should have given classes', () => {
                expect(wrapper.find('.scoreAchieved')).toHaveLength(1);
            });
        });

    });

    describe('Function componentDidMount', () => {
        beforeAll(() => {
            fetchData = jest.spyOn(Playquiz.prototype, 'fetchData').mockImplementation(() => true);
        });

        afterAll(() => {
            fetchData.mockRestore();
        });

        it('should fetch fetchData', () => {
            shallow(<Playquiz />);
            console.log(fetchData.mock.calls.length);
            expect(fetchData.mock.calls.length).toBe(1);
        });
    });
});

