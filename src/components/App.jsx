import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'api';

export class App extends Component {
  state = {
    galleryItems: [],
    error: false,
    loading: true,
    query: '',
    page: 1,
    perPage: 12,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query, perPage } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      const gallery = await fetchImages(page, query, perPage);

      try {
        this.setState({ galleryItems: gallery.hits });
        this.setState({ loading: true, error: false });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSearchSubmit = query => {
    this.setState({
      query: query,
      galleryItems: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      perPage: prevState.perPage + 12,
    }));
  };

  render() {
    const { loading, error, galleryItems, page } = this.state;
    console.log(page);

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {loading && <Loader />}
        {error && <div>Whoops! Error! Please reload this page!</div>}
        {galleryItems.length > 0 && <ImageGallery listImages={galleryItems} />}
        {galleryItems.length > 0 && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}

//
