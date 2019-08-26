/* @flow */
import React, { Component } from 'react';
import { Tab as Base } from 'react-bootstrap';

type TabProps = {
    title: string,
    eventKey: string,
    disabled?: boolean
};

class Tab extends Component<TabProps> {
    render(): Base {
        return <Base {...this.props} tabClassName="tab-of-trust" />;
    }
}

export default Tab;
