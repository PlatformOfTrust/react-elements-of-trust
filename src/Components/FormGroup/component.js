import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

type FormProps = {
    controlId: String,
    muted?: string,
    label: String,
    type: String,
    placeholder?: string
};

type FormState = {
    controlId: String,
    muted?: string,
    label: String,
    type: String,
    placeholder?: string
};

class FormGroup extends Component<FormProps, FormState> {
    state = {
        controlId: this.props.controlId,
        muted: this.props.muted,
        label: this.props.label,
        type: this.props.type,
        placeholder: this.props.placeholder
    };

    render() {
        return (
            <Form.Group controlId={this.state.controlId}>
                <Form.Label>{this.state.label}</Form.Label>
                <Form.Control
                    type={this.state.type}
                    placeholder={this.state.placeholder}
                />

                <Form.Text className="text-muted">
                    {this.state.muted !== undefined ? this.state.muted : ''}
                    {/* why cant we use null? */}
                </Form.Text>
            </Form.Group>
        );
    }
}

export default FormGroup;
