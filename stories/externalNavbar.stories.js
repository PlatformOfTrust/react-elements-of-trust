import './stories.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import ExtNavBar from './../src/Components/ExtNavBar/Navbar/component';
import ExtNavBarItem from './../src/Components/ExtNavBar/NavbarItem/component';

storiesOf('ExtNavbar', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0' },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff', default: true }
        ]
    })
    .add('default', () => (
        <ExtNavBar>
            <ExtNavBarItem label={'link1'} href={'#'} />
            <ExtNavBarItem label={'link2'} href={'#'} />
            <ExtNavBarItem label={'link3'} href={'#'} />
        </ExtNavBar>
    ));
