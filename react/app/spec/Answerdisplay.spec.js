import { shallow } from 'enzyme';
import * as React from 'react';

import AnswerDisplay from '../component/quiz/Answerdisplay';

describe('<Playquiz />', () => {
    const wrapper = shallow(<AnswerDisplay correctAnswer="option 4"/>);

    describe('Component  ', () => {
        it('should render component', () => {
            expect(wrapper.find('.correctAnswer')).toHaveLength(1);
        });
    });

    describe('Props are defined', () => {
        it('Props should have correct value', () => {
            expect(wrapper.find('.correctAnswer').text()).toBe('Correct ans: option 4');
        });
    });
});

