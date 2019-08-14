import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';

import { NavBarItem } from '../NavbarItem/component';

type NavBarProps = {
    children: Array<NavBarItem>,
};

class NavBar extends Component {
    render(): Node {
        return (
            <Nav
                {...this.props}
            >
                {this.props.children}
            </Nav>
        );
    }
}

export default NavBar;
