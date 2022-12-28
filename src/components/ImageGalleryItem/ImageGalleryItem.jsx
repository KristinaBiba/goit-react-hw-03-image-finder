import '../styles.css';

export const ImageGalleryItem = ({ photos }) => {
    console.log(photos);
    return (
        <>
        {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li className="gallery-item" key={id}>
            <img src={webformatURL} alt={tags} />
        </li>)
        )
    }</>)
}
