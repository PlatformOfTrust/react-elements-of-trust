/* @flow */
import React, { Component } from 'react';

type LinkProps = {
    label: string
};

class Links extends Component<LinkProps> {
    render() {
        return (
            <a className="link-of-trust" {...this.props}>
                {this.props.label}
            </a>
        );
    }
}

export default Links;
