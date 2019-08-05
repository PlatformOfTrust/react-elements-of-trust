import React, { Component } from 'react';

type LinkProps = {
    label: string,
    linkTo: string
};

type LinkState = {
    target: string
};

class Links extends Component<LinkProps, LinkState> {
    state = {
        target: '_self'
    };

    componentWillMount() {
        if (this.props.target) {
            this.setState({
                target: '_blank'
            });
        }
    }

    render() {
        return (
            <a target={this.state.target} href={this.props.linkTo}>
                {this.props.label}
            </a>
        );
    }
}

export default Links;
