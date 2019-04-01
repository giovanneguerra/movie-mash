import { GET_POPULAR_MOVIES, GET_MOVIE_IMAGE } from '../actions/types';

const INITIAL_STATE = {
	movies : []
};

export default function users(state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_POPULAR_MOVIES: {
			return {
				...state,
				movies : action.payload
			};
		}
		case GET_MOVIE_IMAGE: {
			return {
				...state
			};
		}
		default: {
			return state;
		}
	}
}
