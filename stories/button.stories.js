import './stories.scss';
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './../src/Components/Button/component';

storiesOf('Button', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0', default: true },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff' }
        ]
    })
    .add('button', () => <Button text="Hello World!" />);
