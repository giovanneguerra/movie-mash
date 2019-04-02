import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReadMoreAndLess from 'react-read-more-less';
import { getPopularMovies } from '../actions';

class MovieList extends Component {
	componentDidMount() {
		this.props.getPopularMovies();
	}
	render() {
		console.log(this.props.movies);
		return (
			<div className='movie-list'>
				{this.props.movies.movies.map((movie) => (
					<div key={movie.id} className='movie'>
						<img
							className='movie__image'
							alt={movie.title}
							src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`}
						/>
						<h3 className='movie__title'>{movie.title}</h3>
						<ReadMoreAndLess className='movie__overview'>
							{movie.overview}
						</ReadMoreAndLess>
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
