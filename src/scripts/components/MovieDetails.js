import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieDetails } from '../actions';

class MovieDetails extends Component {
	componentDidMount() {
		this.props.getMovieDetails(this.props.match.params.movie_id);
	}
	render() {
		const movie = this.props.movie;
		if (movie) {
			return (
				<div key={movie.id} className='movie'>
					<img
						className='movie_image'
						alt={movie.title}
						src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`}
					/>
					<h1 className='movie__title'>{movie.title}</h1>
					<h2 className='movie_vote'>{movie.vote_average}</h2>
					<p className='movie__description'>{movie.overview}</p>
				</div>
			);
		} else {
			return <span>Loading...</span>;
		}
	}
}

const mapStateToProps = (state) => {
	return {
		movie : state.movies.movie
	};
};

export default connect(mapStateToProps, { getMovieDetails })(MovieDetails);
