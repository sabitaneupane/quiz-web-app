import { shallow } from 'enzyme';
import * as React from 'react';

import Questionslist from '../component/quiz/Questionslist';

describe('<Playquiz />', () => {
    const wrapper = shallow(<Questionslist questionsList="Sample question 1"/>);
    
    describe('Component  ', () => {
        it('should render component', () => {
            expect(wrapper.find('.questionsList')).toHaveLength(1);
        });

        describe('Props are defined', () => {
            it('Props should have correct value', () => {
                expect(wrapper.find('.questionsList').text()).toBe('Sample question 1');
            });
        });
    });
l
});

