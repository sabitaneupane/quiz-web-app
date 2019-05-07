import { shallow } from 'enzyme';
import * as React from 'react';

import Home from '../component/Home';

describe('<Home />', () => {
    const wrapper = shallow(<Home />);

    describe('Component  ', () => {
        it('should render component', () => {
    		expect(wrapper.find('.mainTitle')).toHaveLength(1);
    		expect(wrapper.find('.subTitle')).toHaveLength(1);
    		expect(wrapper.find('.paragraph')).toHaveLength(1);
    		expect(wrapper.find('NavLink')).toHaveLength(1);
        });
    });
});

