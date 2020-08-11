import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';

describe('<App/>', () => {
    it('App renders without crashing', () => {
        const {getByText} = render(<App/>);
        expect(getByText('Instance 1 (initial data from the assigment)')).toBeInTheDocument();
    });
});

describe('<App/>', () => {
    it('Instance 1 is rendered', () => {
        const {getByText} = render(<App/>);
        expect(getByText('vacuum')).toBeInTheDocument();
    });
});

describe('<App/>', () => {
    it('Instance 2 is rendered', () => {
        const {getByText} = render(<App/>);
        expect(getByText('No Todos available')).toBeInTheDocument();
    });
});
