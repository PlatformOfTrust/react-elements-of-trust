import React, { Component } from 'react';


class Links extends Component<LinkProps, LinkState> {
    render() {
        return <a {...this.props}>{this.props.label}</a>;
    }
}

export default Links;
