import React, { Component } from 'react';

type LinkProps = {
    label: string,
    linkTo: string
};

type LinkState = {
    target: string
};

class Links extends Component<LinkProps, LinkState> {
    render() {
        return <a {...this.props}>{this.props.label}</a>;
    }
}

export default Links;