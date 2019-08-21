import React, { Component } from 'react';
import { Tabs as Base } from 'react-bootstrap';
import Tab from '../Tab/component';

type TabsProps = {
    children: Array<Tab>,
    defaultActiveKey: string,
    id: string,
    transition?: string,
    variant?: string
};

class Tabs extends Component<TabsProps> {
    render() {
        return (
            <Base {...this.props} className="tabs-of-trust">
                {this.props.children}
            </Base>
        );
    }
}

export default Tabs;
