/* @flow */
import React, { Component } from 'react';
import Links from '../../Link/component';
import Nav from 'react-bootstrap/Nav';

type LinkProps = {
    label: string
};

class NavBarItem extends Component<LinkProps> {
    render(): Nav.Item {
        return (
            <Nav.Item>
                <Links {...this.props} />
            </Nav.Item>
        );
    }
}

export default NavBarItem;
