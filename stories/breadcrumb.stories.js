import './stories.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import Breadcrumbs from './../src/Components/Breadcrumb/component';

storiesOf('Breadcrumbs', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0', default: true },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff' }
        ]
    })
    .add('breadcrumbs', () => (
        <div>
            Without props <Breadcrumbs /> <br />
            With props
            <Breadcrumbs
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'iFrame', href: '/iframe.html' }
                ]}
            />{' '}
        </div>
    ));
