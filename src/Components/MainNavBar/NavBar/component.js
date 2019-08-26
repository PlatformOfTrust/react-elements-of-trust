/* @flow */
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavBarItem from './../NavBarItem/component';

import './style.scss';

type NavBarProps = {
    children: Array<NavBarItem>
};

class MainNavBar extends Component<NavBarProps> {
    render(): Nav {
        return (
            <Nav className="navbar-of-trust" {...this.props}>
                {this.props.children}
            </Nav>
        );
    }
}

export default MainNavBar;
