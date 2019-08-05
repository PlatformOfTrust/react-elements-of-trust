import React, { Component } from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

type BreadState = {
    items: Array<string>
};

class Breadcrumbs extends Component<BreadState> {
    state = {
        items: []
    };

    componentWillMount() {
        const location: string = window.location.pathname;
        const path: Array<string> = location.split('/');

        this.setState({
            items: path
        });
    }

    render(): Node {
        const items: Array<string> = this.state.items;

        let directory: string = '/';
        return (
            <Breadcrumb>
                {items.map(item => {
                    let index: number = items.indexOf(item);
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
