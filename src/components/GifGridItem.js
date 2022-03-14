import PropTypes from 'prop-types'
// 
const GifGridItem = ({ title, url }) => {
    // console.log(image);
    return (
        <div className="card animate__animated animate__zoomIn animate__faster">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
// 
export default GifGridItem