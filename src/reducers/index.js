import { combineReducers } from 'redux';
import toggle from './toggle';
import movies from './movies';

export default combineReducers({
    toggle,
    movies
});