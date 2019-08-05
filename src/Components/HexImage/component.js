import React, { Component } from 'react';

import './styles.scss';

class HexImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
            scale: this.props.scale,
            rotate: '10deg'
        };
    }

    render() {
        const imgStyle = {
            backgroundImage: `url(${this.state.url})`,
            transform: `rotate(${this.state.rotate}) scale(${this.state.scale})`
        };
        return (
            <div className="hexagon" style={imgStyle}>
                <div className="hexTop" />
                <div className="hexBottom" />
            </div>
        );
    }
}

export default HexImg;
