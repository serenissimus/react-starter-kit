import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/components/App';

describe('App', () => {
    const props = {
        title: 'Title',
        logo: <div />,
    };

    it('should correct render', () => {
        const component = renderer.create(<App {...props} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
