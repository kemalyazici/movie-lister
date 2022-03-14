import PropTypes from "prop-types";
const movieRoot = process.env.REACT_APP_MOVIE_ROOT
function ContentItem({movie}) {
    const title = movie.title.replace('&#039;',"'");

    return (
        <div className='card shadow-md compact side bg-base-200'>
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="poster">
                        <div className="shadow">
                            <img src={`${movieRoot}/${movie.image}`} alt="Poster" width="100" height="150"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-info">{title} ({movie.year})</div>

                </div>
            </div>
        </div>
    );
}

ContentItem.propTypes = {
    movie: PropTypes.object.isRequired,
}

export default ContentItem;