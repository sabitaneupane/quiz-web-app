import { shallow } from 'enzyme';
import * as React from 'react';

import Playquiz from '../component/Playquiz';

describe('<Playquiz />', () => {
    const wrapper = shallow(<Playquiz />);

    describe('States are defined', () => {
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

    describe('Correct elements are present', () => {
        it('Should have given classes and elements', () => {
            expect(wrapper.find('.LoadingHead')).toHaveLength(1);
            // expect(wrapper.find('.container')).toHaveLength(1);
        });
    });
    
    describe('Component  ', () => {
        it('should render LoadingHead with appropriate text', () => {
            expect(wrapper.find('.LoadingHead').text()).toBe('Loading...');
        });
    });
});

