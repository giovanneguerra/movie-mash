import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopularMovies } from '../actions';

class MovieList extends Component {
	componentDidMount() {
		this.props.getPopularMovies();
	}
	render() {
		console.log(this.props.movies);
		return (
			<div className='movie-list row'>
				{this.props.movies.movies.map((movie) => (
					<div key={movie.id} className='col-1-of-3'>
						<img
							className='movie-list__image'
							alt={movie.title}
							src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`}
						/>
						<h3 className='movie-list__title'>{movie.title}</h3>
						<p className='movie-list__overview'>{movie.overview}</p>
					</div>
				))}
			</div>
		);
	}
}
const mapStateToPros = (state) => {
	return {
		movies : state.movies
	};
};

export default connect(mapStateToPros, { getPopularMovies })(MovieList);
