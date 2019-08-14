import './index.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './../src/Components/Button/component';
import HexImg from './../src/Components/HexImage/component';
import Image from './../src/Components/Image/component';

storiesOf('Button', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0' },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff', default: true }
        ]
    })
    .add('default', () => <Button text="Hello World!" />);

storiesOf('Image', module).addParameters({
    backgrounds: [
        { name: 'light', value: '#fffef0' },
        { name: 'dark', value: '#1e3b47' },
        { name: 'purple', value: '#7955ff', default: true }
    ],
}).add('default', () => (
    <Image src="https://i.pinimg.com/originals/aa/49/54/aa4954451f16847cb657e68e5f46538a.jpg"/>
));
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
                    require('./../src/Components/Image/test.jpg')
                }
                scale={1}
            />

            <HexImg
                url={
                    require('./../src/Components/Image/test.jpg')
                }
                scale={0.5}
            />
        </div>
    ));
