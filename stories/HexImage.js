import './index.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import HexImg from './../src/Components/HexImage/component';

storiesOf('Image', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0' },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff', default: true }
        ]
    })
    .add('default', () => <HexImg src={require('./test.jpg')} />);
