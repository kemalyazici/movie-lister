import {useContext, useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import MovieContext from "../context/movie/MovieContext";
import ContentItem from "./ContentItem";
import {getMovies} from "../context/movie/MovieActions";
import Spinner from "./Spinner";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

function Content() {

    const {movies,totalPage, status, loading, dispatch} = useContext(MovieContext);
    const [text, setText] = useState('');
    const [p, setP] = useState(1);




    useEffect(()=>{

        dispatch({type:'SET_LOADING'});
        const getMovieData = async () => {
            const movieData = await getMovies("",20,p,text)
            dispatch({type: 'GET_MOVIES', payload: movieData})
        }
        getMovieData()

    }, [dispatch,p,text])






    return (<Router>
            <SearchBar setText={setText} setPage={setP}/>
                {status === 202 ?
                    loading ? <Spinner/> :(<div>
                        <div className='grid grid-cols-1 gap-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
                        {
                            movies.map(movie => <ContentItem key={movie.id} movie={movie}/>)
                        }
                        </div>
                        <div className="float-right">
                            <Pagination page={p} totalPage={totalPage} setPage={setP}/>
                        </div>
                    </div>)
                    : <div className="text-center m-auto">There is no content...</div>
                }
        </Router>
    );
}

export default Content;