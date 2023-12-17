import React, { Component } from 'react';
import * as basicLightbox from 'basiclightbox';

class Modal extends Component {
  handleImageClick = () => {
    const { largeImageURL } = this.props;

    const instance = basicLightbox.create(
      `<img src="${largeImageURL}" alt="large" />`
    );
    instance.show();
  };

  render() {
    const { imageURL } = this.props;

    return (
      <li className="gallery-item">
        <img
          src={imageURL}
          alt="gallery"
          className="gallery-image"
          onClick={this.handleImageClick}
        />
      </li>
    );
  }
}

export default Modal;
