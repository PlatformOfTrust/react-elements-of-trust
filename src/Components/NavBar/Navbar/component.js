import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';

type NavBarProps = {
    children: Array<>
};

class NavBar extends Component<NavBarProps> {
    render(): Node {
        return <Nav {...this.props}>{this.props.children}</Nav>;
    }
}

export default NavBar;
