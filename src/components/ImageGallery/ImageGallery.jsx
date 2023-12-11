import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { getImages } from '../Api/Api';

export class ImageGallery extends Component {
  state = {
    query: '',
    page: 1,
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
      const data = await getImages(query, page);
      console.log('data :>> ', data);
    } catch (error) {}
  };

  render() {
    return <Searchbar onSubmit={this.handleSubmit} />;
  }
}

export default ImageGallery;
