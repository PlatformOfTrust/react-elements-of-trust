import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from '@storybook/react/demo';

import ButtonOfTrust from 'ButtonOfTrust/component';

storiesOf('Button', module)
    .add('with text', () => (
        <Button>Hello Button</Button>
    ))
    .add('with emoji', () => (
        <Button><span role="img"
                      aria-label="so cool">😀 😎 👍 💯</span></Button>
    ))
    .add('with text another', () => (
        <ButtonOfTrust text="hello" />
    ));
