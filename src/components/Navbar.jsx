import {FaFilm} from "react-icons/fa";
import PropTypes from 'prop-types';


function Navbar({title}) {

    return (
        <nav className='navbar mb-4 shadow-lg bg-neutral text-neutral-content'>
            <div className="container ml-5">
                <FaFilm className="inline pr-2 text-3xl"/>
                <div className="text-lg font-bold">{title}</div>
            </div>
            <div className="flex-none gap-2 mr-5">
                <a href="https://github.com/kemalyazici/movie-lister">by Kemal YAZICI</a>
            </div>

        </nav>
    );
}

Navbar.defaultProps = {
    title: 'Movie Lister'
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar;