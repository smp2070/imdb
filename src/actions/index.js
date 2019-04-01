export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
export const GET_MOVIES = 'GET_MOVIES';

export const toggleMessage = () => ({
    type: TOGGLE_MESSAGE
});

export const getMovies = () => {
    return async dispatch => {
        const url = 'https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
        const data = await fetch(url).then(res => res.json());
        const { results } = data;
        return dispatch({ type: GET_MOVIES, results })
    };
}