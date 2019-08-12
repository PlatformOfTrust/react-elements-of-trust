import './index.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './../src/Components/Button/component';
import HexImg from './../src/Components/HexImage/component';

storiesOf('Button', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0' },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff', default: true }
        ]
    })
    .add('default', () => <Button text="Hello World!" />);

storiesOf('HexImg', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0' },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff', default: true }
        ]
    })
    .add('default', () => (
        <div>
            <HexImg
                url={
                    'https://penasultra.com/wp-content/plugins/webp-express/test/test-pattern-tv.jpg'
                }
                scale={1}
            />

            <HexImg
                url={
                    'https://penasultra.com/wp-content/plugins/webp-express/test/test-pattern-tv.jpg'
                }
                scale={0.5}
            />
        </div>
    ));
