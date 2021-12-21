import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//removes components from DOM, no memory data to interfere
afterEach(cleanup);

// declare component that is being tested
describe('About component', () => {
    // renders About test
    // first test
    it('renders', () => {
        render(<About />);
    });
    //second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})