const GifGridItem = ({ id, title, url }) => {
    // console.log(image);
    return (
        <div className="card animate__animated animate__zoomIn animate__faster">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
// 
export default GifGridItem