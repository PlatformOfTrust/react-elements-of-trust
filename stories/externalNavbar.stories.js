import './stories.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import ExtNavBar from './../src/Components/ExternalNavBar/NavBar/component';
import ExtNavBarItem from './../src/Components/ExternalNavBar/NavBarItem/component';

storiesOf('ExternalNavbar', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0', default: true },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff' }
        ]
    })
    .add('externalNavBar', () => (
        <ExtNavBar>
            <ExtNavBarItem label={'link1'} href={'#'} />
            <ExtNavBarItem label={'link2'} href={'#'} />
            <ExtNavBarItem label={'link3'} href={'#'} />
        </ExtNavBar>
    ));
