import './index.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './../src/Components/Button/component';
import HexImg from './../src/Components/HexImage/component';
import Breadcrumbs from './../src/Components/Breadcrumb/component';
import Links from './../src/Components/Link/component';
import FormGroup from './../src/Components/FormGroup/component';
import Image from './../src/Components/Image/component';

import NavBar from './../src/Components/NavBar/Navbar/component';
import NavBarItem from './../src/Components/NavBar/NavbarItem/component';


    storiesOf('FormGroup', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0' },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff', default: true }
        ]
    })
    .add('default', () => <FormGroup controlId={'formid'} muted={'this should be muted'} label={'Ask question'} type={'email'} placeholder={'placeholder text...'} text="Hello World!" />);

storiesOf('Button', module).addParameters({
    backgrounds: [
        { name: 'light', value: '#fffef0' },
        { name: 'dark', value: '#1e3b47' },
        { name: 'purple', value: '#7955ff', default: true }
    ],
}).add('default', () => (
    <Button text="Hello World!"/>
));

storiesOf('Links', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0' },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff', default: true }
        ]
    })
    .add('default', () => <Links label={'This is a link'} href={'#'} />);

storiesOf('Image', module).addParameters({
    backgrounds: [
        { name: 'light', value: '#fffef0' },
        { name: 'dark', value: '#1e3b47' },
        { name: 'purple', value: '#7955ff', default: true }
    ],
}).add('default', () => (
    <Image src={require('./test.png')}/>
));

    storiesOf('Breadcrumbs', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0' },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff', default: true }
        ]
    })
    .add('default', () => <Breadcrumbs />);

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
                    require('./test.jpg')
                }
                scale={1}
            />

            <HexImg
                url={
                    require('./test.jpg')
                }
                scale={0.5}
            />
        </div>
    ));
