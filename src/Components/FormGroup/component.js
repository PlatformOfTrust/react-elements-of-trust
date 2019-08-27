/* @flow */
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
    render(): Form.Group {
        return (
            <Form.Group
                className="form-group-of-trust"
                controlId={this.props.controlId}
            >
                <Form.Label className="form-label-of-trust">
                    {this.props.label}
                </Form.Label>
                <Form.Control
                    className="form-input-of-trust"
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                />

                <Form.Text className="text-muted">
                    {this.props.muted !== undefined ? this.props.muted : ''}
                </Form.Text>
            </Form.Group>
        );
    }
}

export default FormGroup;
