import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from '../../actions';

class MoviesList extends PureComponent {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    const { movies, isLoaded, moviesLoadedAd } = this.props;
    const oneHour = 60 * 60 * 1000;
    if ( !isLoaded || ((new Date()) - moviesLoadedAd) > oneHour ) return <h1>Loading...</h1>
    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
  moviesLoadedAd: state.movies.moviesLoadedAt
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ getMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;