import css from './ImageGalleryItem.module.css';
import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { imageURL } = this.props;
    return (
      <li className={css.imageGalleryItem}>
        <img
          src={imageURL}
          alt="gallery"
          className={css.imageGalleryItem_image}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
