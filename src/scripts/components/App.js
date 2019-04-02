import React, { Component } from 'react';

import '../../styles/main.scss';
import MovieList from './MovieList';
import Logo from './Logo';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<div className='container'>
				<Logo />
				<MovieList />
				<Footer />
			</div>
		);
	}
}

export default App;
