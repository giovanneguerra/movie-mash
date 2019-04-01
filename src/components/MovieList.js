import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopularMovies } from '../actions';

class MovieList extends Component {
	componentDidMount() {
		this.props.getPopularMovies();
	}
	render() {
		return (
			<ul>
				{this.props.movies.movies.map((movie) => (
					<li key={movie.id}>{movie.title}</li>
				))}
			</ul>
		);
	}
}
const mapStateToPros = (state) => {
	return {
		movies : state.movies
	};
};

export default connect(mapStateToPros, { getPopularMovies })(MovieList);
