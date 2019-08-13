import React, { Component } from 'react';
import Links from '../../Link/component';
import Nav from 'react-bootstrap/Nav';

type ItemProps = {
    linkTo: String,
    label: String,
    disabled: boolean,
    element: node
};

class NavBarItem extends Component<ItemProps> {
    render(): Node {
        return (
            <Nav.Item>
                <Links {...this.props} />
            </Nav.Item>
        );
    }
}

export default NavBarItem;