import './stories.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import MainNavBar from './../src/Components/MainNavBar/NavBar/component';
import NavBarItem from './../src/Components/MainNavBar/NavBarItem/component';

storiesOf('NavBar', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0', default: true },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff' }
        ]
    })
    .add('navbar', () => (
        <MainNavBar>
            <NavBarItem label={'link1'} href={'#'} />
            <NavBarItem label={'link2'} href={'#'} />
            <NavBarItem label={'link3'} href={'#'} />
        </MainNavBar>
    ));
