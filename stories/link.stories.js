import './stories.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import Links from './../src/Components/Link/component';

storiesOf('Links', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0' },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff', default: true }
        ]
    })
    .add('default', () => <Links label={'This is a link'} href={'#'} />);
