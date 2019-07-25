import React, {Component} from 'react';
import {Button as Base} from 'react-bootstrap';

type ButtonProps = {
    text: string;
    disabled?: boolean;
}

class Button extends Component <ButtonProps> {
    render() {
        return (
            <Base {...this.props}
                  className="button-of-trust">{this.props.text}</Base>
        );
    }
}

export default Button;
