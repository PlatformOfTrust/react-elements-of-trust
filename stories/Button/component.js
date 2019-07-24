/* @flow */

import './style.scss';

import React, {Component} from 'react';
import {Button as Bootstrap} from 'react-bootstrap';

type ButtonProps = {
    text: string;
    disabled?: boolean;
}

class Button extends Component <ButtonProps> {
    render() {
        return (
            <Bootstrap {...this.props}
                       className="button-of-trust">{this.props.text}</Bootstrap>
        );
    }
}

export default Button;
