import React, { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { getImages } from '../Api/Api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    result: 0,
    error: null,
  };

  handleSubmit = value => {
    this.setState({ query: value });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getApi(query, page);
    }
  }

  getApi = async (query, page) => {
    try {
      const { hits, totalHits } = await getImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        result: totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ul className="gallery">
          {images.map(image => (
            <ImageGalleryItem key={image.id} imageURL={image.webformatURL} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ImageGallery;
