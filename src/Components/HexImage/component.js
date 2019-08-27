/* @flow */
import React, { Component } from 'react';

type HexImageProps = {
    src: string,
    scale: string
};

class HexImage extends Component<HexImageProps> {
    render() {
        const imgStyle = {
            backgroundImage: `url('${this.props.src}')`,
            transform: `rotate(10deg) scale(${this.props.scale})`
        };
        return (
            <div className="hexagon-container">
                <div className="hexagon" style={imgStyle}>
                    <div className="hex-top" />
                    <div className="hex-bottom" />
                </div>
            </div>
        );
    }
}

export default HexImage;
