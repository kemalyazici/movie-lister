import {useContext, useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import MovieContext from "../context/movie/MovieContext";
import ContentItem from "./ContentItem";
import {getMovies} from "../context/movie/MovieActions";
import Spinner from "./Spinner";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";

function Content() {

    const {movies,totalPage, status, loading, dispatch} = useContext(MovieContext);
    const [text, setText] = useState('');
    const [p, setP] = useState(1);
    const [genres,setGenres] = useState("");
    const [order, setOrder] = useState("");




    useEffect(()=>{

        dispatch({type:'SET_LOADING'});
        const getMovieData = async () => {
            const movieData = await getMovies(order,10,p,text,genres)
            dispatch({type: 'GET_MOVIES', payload: movieData})
            console.log(genres)
        }
        getMovieData()

    }, [dispatch,p,text,genres,order])






    return (<Router>
            <SearchBar setText={setText} setPage={setP}/>

                        <div>
                        <div className="grid grid-cols-6 lg:grid-cols-6 md:grid-cols-2 s:grid-cols-2 xs:grid-cols-2">
                            <div className="col-span-1 md:col-span-1 xs:col-span-1">
                                <SideBar setGenres={setGenres} setOrder={setOrder} setPage={setP}/>
                            </div>
                            {status === 202 ? (
                                    loading ? <Spinner/> :
                                <div
                                    className='col-span-5 lg:col-span-5 xs:col-span-1 md:col-span-1'>
                                    {
                                         movies.map(movie => <ContentItem
                                            key={movie.id} movie={movie}/>)
                                    }
                                </div>
                                )
                                : <div className="text-center m-auto col-span-5">There is no content...</div>
                            }
                        </div>
                        <div className="float-right">
                            {!loading && <Pagination page={p} totalPage={totalPage} setPage={setP}/> }
                        </div>
                    </div>


        </Router>
    );
}

export default Content;