import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/ExternalNavbar.js');
}

configure(loadStories, module);
