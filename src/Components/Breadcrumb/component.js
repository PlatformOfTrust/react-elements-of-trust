import React, { Component } from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

type BreadProps = {
    items: Array<Object>
};

type BreadState = {
    labels: Array<string>,
    links: Array<string>
};

class Breadcrumbs extends Component<BreadProps, BreadState> {
    constructor(props) {
        super(props);
        this.state = {
            labels: [],
            links: []
        };
    }

    componentWillMount() {
        if (!this.props.items) {
            const location = window.location.pathname;
            const links = location.split('/');
            const labels = links.map(item => {
                let itemSplit = item.split('-').join(' ');
                let capitalized = this.capitalizeFirstLetter(itemSplit);
                return capitalized;
            });

            this.setState({
                labels: labels,
                links: links
            });
        } else {
            let items = this.props.items;
            const links = [];
            const labels = [];
            items.map((item, key) => {
                let link = item.href;
                let label = item.label;
                links.push(link);
                labels.push(label);
                return links, labels;
            });
            this.setState({
                labels: labels,
                links: links
            });
        }
    }

    capitalizeFirstLetter(string: string) {
        let result: string = string
            .split(' ')
            .map((word, key) => {
                if (typeof word[0] === 'string') {
                    word = word.charAt(0).toUpperCase() + word.substr(1);
                    return word;
                }
            })
            .join(' ');
        return result;
    }

    render(): Node {
        const labels: Array<string> = this.state.labels;
        const links: Array<string> = this.state.links;

        let directory: string = '/';
        return (
            <Breadcrumb>
                {labels.map((item, key) => {
                    let index = labels.indexOf(item);
                    directory = this.props.items
                        ? String(links[index])
                        : directory + String(links[index]);
                    return index === labels.length - 1 ? (
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
