import React, { Component } from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentWillMount() {
        const location = window.location.pathname;
        const path = location.split('/');

        this.setState({
            items: path
        });
    }

    render() {
        const items = this.state.items;

        let directory = '/';
        return (
            <Breadcrumb>
                {items.map(item => {
                    let index = items.indexOf(item);
                    directory = directory + String(items[index]);
                    return index === items.length - 1 ? (
                        <Breadcrumb.Item active>
                            {item === '' ? 'Home' : item}
                        </Breadcrumb.Item>
                    ) : (
                        <Breadcrumb.Item href={directory}>
                            {item === '' ? 'Home' : item}
                        </Breadcrumb.Item>
                    );
                })}
            </Breadcrumb>
        );
    }
}

export default Breadcrumbs;
