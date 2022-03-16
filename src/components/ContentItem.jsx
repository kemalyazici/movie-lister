import PropTypes from "prop-types";
const movieRoot = process.env.REACT_APP_MOVIE_ROOT
function ContentItem({movie}) {
    const title = movie.title.replace('&#039;',"'");

    return (
        <div className='card bg-base-200 mb-5' style={{height:"200px"}}>
            <div className="flex-row card-body">
                <div>
                    <div className="poster">
                        <div className="shadow">
                            <img src={`${movieRoot}/${movie.image}`} alt="Poster" style={{height:"150px", width:"115px"}}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-info mb-4" style={{fontSize:"18px"}}>{title} ({movie.year})</div>
                    <p>{movie.category.replaceAll(",",", ")}</p>

                </div>
            </div>
        </div>
    );
}

ContentItem.propTypes = {
    movie: PropTypes.object.isRequired,
}

export default ContentItem;