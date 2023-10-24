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
    isLastPage: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true, error: false });
      // const gallery = await fetchImages(this.state.page, this.state.query);
      // this.setState({ galleryItems: gallery.hits });
      // console.log(gallery);
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState);
    console.log('this.state', this.state);

    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const gallery = await fetchImages(this.state.page, this.state.query);
      this.setState({ galleryItems: gallery.hits });
    }
  }

  handleSearchSubmit = query => {
    if (this.state.query === query) {
      return;
    }
    this.setState({
      query: query,
      page: 1,
      galleryItems: [],
      error: null,
      isLastPage: false,
    });
  };

  handleLoadMore = page => {
    if (this.state.page === page) {
      return;
    }
    this.setState(prevState => prevState.page + 1);
  };

  getVisibImages = () => {
    return this.state.galleryItems.filter(item =>
      item.tags.toLowerCase().includes(this.state.query.toLowerCase())
    );
  };

  render() {
    const visibImages = this.getVisibImages();
    const { loading, error } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {loading && <Loader />}
        {error && <div>Whoops! Error! Please reload this page!</div>}
        {visibImages.length > 0 && <ImageGallery listImages={visibImages} />}
        <Button onClick = {this.handleLoadMore} page={this.state.page}/>
      </div>
    );
  }
}

//
