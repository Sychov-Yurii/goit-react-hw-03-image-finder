import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { imageURL } = this.props;
    return (
      <li className="gallery-item">
        <img src={imageURL} alt="gallery" className="gallery-image" />
      </li>
    );
  }
}

export default ImageGalleryItem;
