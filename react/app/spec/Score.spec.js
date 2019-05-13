import { shallow } from 'enzyme';
import * as React from 'react';

import Score from '../component/quiz/Score';

describe('<Score />', () => {
    const wrapper = shallow(< Score scoreAchieved='2' totalQuestions='10' />);

    describe('Component  ', () => {
        it('should render component', () => {
            expect(wrapper.find('.scoreHead')).toHaveLength(1);
            expect(wrapper.find('.quizScored')).toHaveLength(1);
            expect(wrapper.find('.playButton')).toHaveLength(1);
            expect(wrapper.find('.scoreAchieved')).toHaveLength(1);
            expect(wrapper.find('.totalQuestions')).toHaveLength(1);
        });
    });

    describe('Props are defined', () => {
        it('Props should have correct value', () => {
            expect(wrapper.find('.scoreAchieved').text()).toBe('2');
            expect(wrapper.find('.totalQuestions').text()).toBe('10');
        });
    });
});

