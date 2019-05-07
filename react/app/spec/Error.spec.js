import { shallow } from 'enzyme';
import * as React from 'react';

import Error from '../component/Error';

describe('<Error />', () => {
    const wrapper = shallow(<Error />);

    describe('Component  ', () => {
        it('should render component', () => {
            expect(wrapper.find('.mainTitle')).toHaveLength(1);
            expect(wrapper.find('.mainTitle').text()).toBe('Page not found');
    		expect(wrapper.find('NavLink')).toHaveLength(1);
        });
    });
});

