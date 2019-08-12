import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

type FormProps = {
    controlId: String,
    muted?: string,
    label: String,
    type: String,
    placeholder?: string
};


class FormGroup extends Component<FormProps> {

    render() {
        return (
            <Form.Group controlId={this.props.controlId}>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                />

                <Form.Text className="text-muted">
                    {this.props.muted !== undefined ? this.props.muted : ''}
                    {/* why cant we use null? */}
                </Form.Text>
            </Form.Group>
        );
    }
}

export default FormGroup;
