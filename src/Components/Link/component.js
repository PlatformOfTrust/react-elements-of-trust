import React, { Component } from 'react';

class Links extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: this.props.label,
            linkTo: this.props.linkTo,
            target: '_self'
        };
    }

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
                {this.state.label}
            </a>
        );
    }
}

export default Links;
