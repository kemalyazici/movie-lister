import PropTypes from "prop-types";

function SearchBar({setText,setPage}) {


    const handleChange = (e) => {
        setPage(1)
        setText(e.target.value)
    }

    return (
        <div className="top-0 align-top mb-5 content-center text-center">
            <input type="text" placeholder="Search" onChange={handleChange} className="input input-bordered w-full max-w-xl mr-5"/>
        </div>
    );
}

SearchBar.propTypes = {
    setText : PropTypes.func.isRequired,
}

export default SearchBar;