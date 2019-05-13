import { shallow } from 'enzyme';
import * as React from 'react';

import Questionslist from '../component/quiz/Questionslist';

describe('<Playquiz />', () => {
    const wrapper = shallow(<Questionslist />);
    
    describe('Component  ', () => {
        it('should render component', () => {
            expect(wrapper.find('.questionsList')).toHaveLength(1);
        });
    });

});

