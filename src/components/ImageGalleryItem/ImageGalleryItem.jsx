export const ImageGalleryItem = ({ photos }) => {
    return (
        <>
        {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li className="gallery-item" key={id}>
            <img src={webformatURL} alt={tags} className='gallery-item-img'/>
        </li>)
        )
    }</>)
}
