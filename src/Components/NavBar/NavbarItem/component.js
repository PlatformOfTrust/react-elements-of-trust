import React, { Component } from 'react';

import Nav from 'react-bootstrap/Nav';

type ItemProps = {
    link: String,
    text: String,
    disabled: boolean
};

class NavBarItem extends Component<ItemProps> {
    render(): Node {
        return (
            <Nav.Item>
                <Nav.Link
                    disabled={this.props.disabled}
                    href={'/' + this.props.link}
                >
                    {this.props.text}
                </Nav.Link>
            </Nav.Item>
        );
    }
}

export default NavBarItem;
