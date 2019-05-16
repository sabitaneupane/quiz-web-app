import { shallow } from 'enzyme';
import * as React from 'react';

import Answeroptionslist from '../component/quiz/Answeroptionslist';

describe('<Answeroptionslist />', () => {
    const answerList = ["Option 1", "Option 2", "Option 3", "Option 4"]; 
    const wrapper = shallow(<Answeroptionslist answerList={answerList} question_id={1}/>);
    
    describe('Component  ', () => {
        it('should render component', () => {
            expect(wrapper.find('.answerOptionsList')).toHaveLength(1);
            expect(wrapper.find('.answerOptionsList').children().find('.optionsLabel')).toHaveLength(answerList.length);
        });
    });
});

