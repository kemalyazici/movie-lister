import axios from "axios";
const MOVIE_URL = process.env.REACT_APP_MOVIE_API_URL;



export const getMovies = async (order="id",limit=40,p=1,q="",genres="") => {
    const params = new URLSearchParams({
        order: order,
        limit: limit,
        genre:genres,
        p: p,
        q:q
    })
    const [response] = await Promise.all([axios.get(`${MOVIE_URL}&${params}`)]);

    return response.data;

}

