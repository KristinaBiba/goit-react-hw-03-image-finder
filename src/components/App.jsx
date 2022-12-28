import { Component } from "react";

import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from './Searchbar/Searchbar';

import './styles.css';

export class App extends Component {
  state = {
    photos: [],
    searchName: '',
  };

  componentDidMount() {
    const q = this.state.searchName;

    fetch(`https://pixabay.com/api/?q=${q}&page=1&key=31406001-9559e1c679da811c7e2a75baf&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        this.setState({photos: data.hits})
        console.log('data: ', data.hits);
  })
  .catch(error => {
  });
  };

  handleSearch = (searchName) => {
    this.setState({searchName})
  };

  render() {

    return (
      <>
        <Searchbar onSub={this.handleSearch} />
        {(this.state.photos.length > 0) && (<ImageGallery >
          <ImageGalleryItem photos={this.state.photos} />
        </ImageGallery>)}
      </>
    );
  };
}
