import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './scripts/reducers';
import App from './scripts/components/App';
import MovieDetails from './scripts/components/MovieDetails';

const store = createStore(reducers, applyMiddleware(reduxThunk));

window.store = store;

ReactDOM.render(
	<Provider store={window.store}>
		<BrowserRouter>
			<div>
				<Route path='/' exact component={App} />
				<Route path='/movie/:movie_id' exact component={MovieDetails} />
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
