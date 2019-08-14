import React, { Component } from 'react';
import { Image as Base } from 'react-bootstrap';

type ImageProps = {
    src: string,
    fluid?: boolean,
    rounded?: boolean,
    roundedCircle?: boolean,
    thumbnail?: boolean
};

class Image extends Component<ImageProps> {
    render() {
        return <Base {...this.props} className="image-of-trust" />;
    }
}

export default Image;
