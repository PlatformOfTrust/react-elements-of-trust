import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';

import { ExtNavBarItem } from '../NavbarItem/component';

type Props = {
    children: Array<NavBarItem>
};

class ExtNavBar extends Component<Props> {
    render(): Node {
        return <Nav {...this.props}>{this.props.children}</Nav>;
    }
}

export default ExtNavBar;
