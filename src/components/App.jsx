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
    loading: false,
    query: '',
    page: 1,
    totalPages: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ loading: true });

      const gallery = await fetchImages(page, query);

      try {
        this.setState(prevState => ({
          galleryItems: [...prevState.galleryItems, ...gallery.hits],
          totalPages: Math.ceil(gallery.totalHits / 12),
          error: false,
        }));
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
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { loading, error, galleryItems, page,totalPages } = this.state;
    console.log(page);

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {loading && <Loader />}
        {error && <div>Whoops! Error! Please reload this page!</div>}
        {galleryItems.length > 0 && <ImageGallery listImages={galleryItems} />}
        {galleryItems.length > 0 && totalPages !== page && !loading && ( <Button onClick={this.handleLoadMore} />)}
      </div>
    );
  }
}

//
