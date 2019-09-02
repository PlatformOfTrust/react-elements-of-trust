/* @flow */
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import ExternalNavBarItem from './../NavBarItem/component';

type Props = {
    children: Array<ExternalNavBarItem>
};

class ExternalNavBar extends Component<Props> {
    render(): Nav {
        return (
            <Nav className="external-navbar-of-trust" {...this.props}>
                {this.props.children}
            </Nav>
        );
    }
}

export default ExternalNavBar;
