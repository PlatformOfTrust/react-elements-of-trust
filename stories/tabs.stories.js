import './stories.scss';
import React from 'react';
import { storiesOf } from '@storybook/react';

import Tab from './../src/Components/Tab/component';
import Tabs from './../src/Components/Tabs/component';

storiesOf('Tabs', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0', default: true },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff' }
        ]
    })
    .add('tabs', () => (
        <Tabs defaultActiveKey="tab" id="navigation-bar">
            <Tab title="Home" eventKey="home">
                Test text for home.
            </Tab>
            <Tab title="Tab" eventKey="tab">
                Test text for tab.
            </Tab>
            <Tab title="Contact" eventKey="contact" disabled>
                Test text for disabled contact.
            </Tab>
        </Tabs>
    ));
