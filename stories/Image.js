import './index.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import Image from './../src/Components/Image/component';

storiesOf('Image', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0' },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff', default: true }
        ]
    })
    .add('default', () => <Image src={require('./test.jpg')} />);
