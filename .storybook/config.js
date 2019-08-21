import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/Button.js');
    require('../stories/Link.js');
    require('../stories/Breadcrumb.js');
    require('../stories/ExternalNavbar.js');
    require('../stories/Navbar.js');
    require('../stories/FormGroup.js');
    require('../stories/HexImage.js');
    require('../stories/Image.js');
}

configure(loadStories, module);
