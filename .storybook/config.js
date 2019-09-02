import { configure, addDecorator } from '@storybook/react';
import React from 'react';

const req = require.context('../stories', true, /\.stories\.js$/);

const Container = {
    padding: '2rem',
};

const insideContainer = {
    margin: '0 auto',
};

const CenterDecorator = storyFn => (
    <div style={Container}>
        <div style={insideContainer}>{storyFn()}</div>
    </div>
);

function loadStories() {
    addDecorator(CenterDecorator);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
