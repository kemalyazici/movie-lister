import PropTypes from "prop-types";



function ContentItem({movie}) {
    return (
        <div>
            {movie.title}
        </div>
    );
}

ContentItem.propTypes = {
    movie: PropTypes.object.isRequired,
}

export default ContentItem;