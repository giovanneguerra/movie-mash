import mdb from '../api/mdb';
import { GET_POPULAR_MOVIES } from './types';

const apiKey = 'api_key=45732116feffadd94836027e5e49ab8c';

export const getPopularMovies = () => async (dispatch) => {
	const response = await mdb.get(`/popular?${apiKey}`);

	dispatch({ type: GET_POPULAR_MOVIES, payload: response.data.results });
};
