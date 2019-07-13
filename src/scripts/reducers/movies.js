import { GET_POPULAR_MOVIES, GET_MOVIE_DETAILS } from '../actions/types';

const INITIAL_STATE = {
	movies : [],
	movie  : null
};

export default function users(state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_POPULAR_MOVIES: {
			return {
				...state,
				movies : action.payload
			};
		}
		case GET_MOVIE_DETAILS: {
			return {
				...state,
				movie : action.payload
			};
		}
		default: {
			return state;
		}
	}
}
