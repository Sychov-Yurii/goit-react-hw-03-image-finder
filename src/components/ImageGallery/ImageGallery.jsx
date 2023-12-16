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
    isloading: false,
  };

  handleSubmit = value => {
    this.setState({
      query: value,
      page: 1,
      images: [],
      result: 0,
      error: null,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getApi(query, page);
    }
  }

  getApi = async (query, page) => {
    this.setState({ isloading: true });
    try {
      const { hits, totalHits } = await getImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        result: totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isloading: false });
    }
  };

  pushButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, result, isloading, error } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {isloading && <p>...Loading</p>}
        {error && <p>...Error {error}</p>}
        {images && <p>...No photo {error}</p>}
        <ul className="gallery">
          {images.map(image => (
            <ImageGalleryItem key={image.id} imageURL={image.webformatURL} />
          ))}
        </ul>
        {result > images.length && (
          <button onClick={this.pushButton}>Load moore</button>
        )}
      </div>
    );
  }
}

export default ImageGallery;
