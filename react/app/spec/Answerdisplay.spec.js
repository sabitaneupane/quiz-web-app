import { shallow } from 'enzyme';
import * as React from 'react';

import AnswerDisplay from '../component/quiz/Answerdisplay';

describe('<Playquiz />', () => {
    const wrapper = shallow(<AnswerDisplay />);
    
    describe('Component  ', () => {
        it('should render component', () => {
            expect(wrapper.find('.correctAnswer')).toHaveLength(1);
        });
    });

});

