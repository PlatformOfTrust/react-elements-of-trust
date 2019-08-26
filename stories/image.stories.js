import './stories.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import Image from './../src/Components/Image/component';

import HexImg from './../src/Components/HexImage/component';

storiesOf('Image', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0', default: true },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff' }
        ]
    })
    .add('image', () => <Image src={require('./Images/test-image.jpg')} />);
