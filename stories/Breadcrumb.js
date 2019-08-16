import './index.scss';
import React from 'react';

import { storiesOf } from '@storybook/react';

import Breadcrumbs from './../src/Components/Breadcrumb/component';

storiesOf('Breadcrumbs', module)
    .addParameters({
        backgrounds: [
            { name: 'light', value: '#fffef0' },
            { name: 'dark', value: '#1e3b47' },
            { name: 'purple', value: '#7955ff', default: true }
        ]
    })
    .add('default', () => (
        <div>
            Without props <Breadcrumbs /> <br />
            With props
            <Breadcrumbs
                items={[
                    { label: 'label1', href: '/news' },
                    { label: 'label2', href: '/cases' },
                    { label: 'label3', href: '/events' }
                ]}
            />{' '}
        </div>
    ));
