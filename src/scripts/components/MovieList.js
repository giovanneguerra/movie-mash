import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPopularMovies } from '../actions';

class MovieList extends Component {
	componentDidMount() {
		this.props.getPopularMovies();
	}
	render() {
		var { movies } = this.props.movies;
		return (
			<div className='movie-list'>
				{movies.map((movie) => (
					<Link
						to={`/movie/${movie.id}`}
						key={movie.id}
						className='movie'
					>
						<img
							className='movie__image'
							alt={movie.title}
							src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`}
						/>
						<h3 className='movie__title'>{movie.title}</h3>
					</Link>
				))}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		movies : state.movies
	};
};

export default connect(mapStateToProps, { getPopularMovies })(MovieList);
