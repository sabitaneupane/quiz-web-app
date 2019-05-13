import { shallow } from 'enzyme';
import * as React from 'react';

import Answeroptionslist from '../component/quiz/Answeroptionslist';

describe('<Playquiz />', () => {
    const wrapper = shallow(<Answeroptionslist />);
    
    describe('Component  ', () => {
        it('should render component', () => {
            expect(wrapper.find('.answerOptionsList')).toHaveLength(1);
        });
    });

});

