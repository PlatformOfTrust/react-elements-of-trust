import './stories.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import HexImage from './../src/Components/HexImage/component';

storiesOf('HexImage', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0', default: true },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff' }
        ]
    })
    .add('hexImage', () => (
        <HexImage src={require('./Images/test-image.jpg')} />
    ));
