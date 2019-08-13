import './index.scss';
import React from 'react';

import {storiesOf} from '@storybook/react';

import Button from './../src/Components/Button/component';
import Tab from './../src/Components/Tab/component';
import Tabs from './../src/Components/Tabs/component';
import Image from './../src/Components/Image/component';

storiesOf('Button', module).addParameters({
    backgrounds: [
        { name: 'light', value: '#fffef0' },
        { name: 'dark', value: '#1e3b47' },
        { name: 'purple', value: '#7955ff', default: true }
    ],
}).add('default', () => (
    <Button text="Hello World!"/>
));

storiesOf('Image', module).addParameters({
    backgrounds: [
        { name: 'light', value: '#fffef0' },
        { name: 'dark', value: '#1e3b47' },
        { name: 'purple', value: '#7955ff', default: true }
    ],
}).add('default', () => (
    <Image src="https://i.pinimg.com/originals/aa/49/54/aa4954451f16847cb657e68e5f46538a.jpg"/>
));

storiesOf('Tabs', module).addParameters({
    backgrounds: [
        { name: 'light', value: '#fffef0' },
        { name: 'dark', value: '#1e3b47' },
        { name: 'purple', value: '#7955ff', default: true }
    ],
}).add('default', () => (
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