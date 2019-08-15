import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';

import { NavBarItem } from '../NavbarItem/component';

type Props = {
    children: Array<NavBarItem>
};

class NavBar extends Component<Props> {
    render(): Node {
        return <Nav {...this.props}>{this.props.children}</Nav>;
    }
}

export default NavBar;
