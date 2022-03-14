const movieReducer = (state,action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.payload.movies,
                num: action.payload.num,
                totalPage: action.payload.totalPage,
                status: action.payload.status,
                loading:false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading:true
            }
        default:
            return state
    }
}
export default movieReducer