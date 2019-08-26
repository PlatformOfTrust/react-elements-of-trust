/* @flow */
import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './style.scss';

type BreadProps = {
    items: Array<{ label: string, href: string }>
};

type BreadState = {
    items: Array<{ label: string, href: string }>
};

class Breadcrumbs extends Component<BreadProps, BreadState> {
    constructor(props: BreadProps) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentWillMount() {
        if (!this.props.items) {
            let items: Array<{ label: string, href: string }> = [];
            const location: string = window.location.pathname;
            let directory: string = '/';

            const links = location.split('/').map((link, key) => {
                let completeLink: string = directory + link;
                return completeLink;
            });

            const labels = location.split('/').map(item => {
                let itemSplit: string = item.split('-').join(' ');
                return itemSplit;
            });

            for (var i = 0; i < labels.length; i++) {
                let item: { label: string, href: string } = {
                    label: labels[i],
                    href: links[i]
                };
                items.push(item);
            }

            this.setState({
                items: items
            });
        } else {
            this.setState({
                items: this.props.items
            });
        }
    }

    capitalizeFirstLetter(string: string): string {
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

    render(): Breadcrumb {
        const items: Array<{ label: string, href: string }> = this.state.items;

        return (
            <Breadcrumb className="breadcrumb-of-trust">
                {items.map((item, key) => {
                    return items.indexOf(item) === items.length - 1 ? (
                        <Breadcrumb.Item
                            active
                            className="breadcrumb-item-active"
                        >
                            {item.label === ''
                                ? 'Home'
                                : this.capitalizeFirstLetter(item.label)}
                        </Breadcrumb.Item>
                    ) : (
                        <Breadcrumb.Item
                            className="breadcrumb-item"
                            href={String(item.href)}
                        >
                            {item.label === ''
                                ? 'Home'
                                : this.capitalizeFirstLetter(item.label)}
                        </Breadcrumb.Item>
                    );
                })}
            </Breadcrumb>
        );
    }
}

export default Breadcrumbs;
