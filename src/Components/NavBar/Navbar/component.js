import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';

import { NavBarItem } from '../NavbarItem/component';

type NavBarProps = {
    children: Array<NavBarItem>,
    class?: String,
    activeKey?: String,
    defaultActiveKey?: String,
    variant?: string
};

class NavBar extends Component {
    render(): Node {
        return (
            <Nav
                activeKey={this.props.activeKey}
                defaultActiveKey={this.props.defaultActiveKey}
                variant={this.props.variant}
            >
                {this.props.children}
            </Nav>
        );
    }
}

export default NavBar;
