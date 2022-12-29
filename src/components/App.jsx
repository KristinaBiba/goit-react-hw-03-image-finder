import { Component } from "react";
import { Button } from "./Button/Button";

import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    photos: [],
    searchName: '',
    page: 1,
  };

  componentDidUpdate(_, prevState) {

    if (prevState.searchName !== this.state.searchName || prevState.page !== this.state.page ) {

      fetch(`https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.page}&key=31406001-9559e1c679da811c7e2a75baf&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(data => {
          this.setState(prevState => { return { photos: [...prevState.photos, ...data.hits]  } })
        })
        .catch(error => {
        });
    }
    return;
  };

  handleSearch = (searchName) => {
    this.setState({searchName: searchName, page: 1, photos: []})
  };

  handleLoadMore = () => {
    this.setState(prevState => { return { page: prevState.page + 1 } })
  }

  render() {

    return (
      <div className="app" >
        <Searchbar onSub={this.handleSearch} />

        {(this.state.photos.length > 0) && (<><ImageGallery >
          <ImageGalleryItem photos={this.state.photos} />
        </ImageGallery>
        
          <Button onCl={this.handleLoadMore} /></>)}
        
     </div>
    );
  };
}
