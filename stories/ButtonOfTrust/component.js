/* @flow */

import './style.scss';

import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

type ButtonOfTrustProps = {
    text: string;
    disabled?: boolean;
}

class ButtonOfTrust extends Component <ButtonOfTrustProps> {
    render() {
        return (
            <Button {...this.props}
                    className="button-of-trust">{this.props.text}</Button>
        );
    }
}

export default ButtonOfTrust;
