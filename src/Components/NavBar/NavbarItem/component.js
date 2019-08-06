import React, { Component } from 'react';

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
                <Nav.Link
                    as={this.props.element}
                    disabled={this.props.disabled}
                    href={'/' + this.props.linkTo}
                >
                    {this.props.label}
                </Nav.Link>
            </Nav.Item>
        );
    }
}

export default NavBarItem;
