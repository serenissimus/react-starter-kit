import React from 'react';
import renderer from 'react-test-renderer';
import App from 'components/App';

describe('App', () => {
    it('should correct render', () => {
        const component = renderer.create(<App />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should correct render with props', () => {
        const props = {
            title: 'Title',
            logo: 'logo',
        };

        const component = renderer.create(<App {...props} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
