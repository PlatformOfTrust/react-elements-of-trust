import React, { Component } from 'react';

import './styles.scss';

type HexImgProps = {
    url: string,
    scale: string
};

class HexImg extends Component<HexImgProps> {
    render() {
        const imgStyle = {
            backgroundImage: `url(${this.props.url})`,
            transform: `rotate(10deg) scale(${this.props.scale})`
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
