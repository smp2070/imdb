export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

export const toggleMessage = () => ({
    type: TOGGLE_MESSAGE
});

export const getMovies = () => {
    return async dispatch => {
        const url = 'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
        const data = await fetch(url).then(res => res.json());
        return dispatch({ type: GET_MOVIES, data: data.results })
    };
}

export const getMovie = id => {
    return async dispatch => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`;
        const data = await fetch(url).then(res => res.json());
        return dispatch({ type: GET_MOVIE, data });
    };
}

export const resetMovie = () => ({
    type: RESET_MOVIE
})