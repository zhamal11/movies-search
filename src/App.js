import React from 'react';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import axios from 'axios';
import MoviePage from './components/MoviePage';
import MoviesPagination from './components/MoviesPagination'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			data: [],
			page: 1,
			totalResults: 0,
			mode: false,
			dataPage: {},
			title: 'all'
		};
	}

	componentDidMount() {
		axios.get(`http://www.omdbapi.com/?apikey=65aa46e8&s=all&page=1`)
			.then(res => {	
				this.setState({ 
					data: res.data.Search,
					page: 1,
					totalResults: res.data.totalResults,
				});
			})
	}

	handleSearchMovies = value => {
		let title = value || 'all';

		axios.get(`http://www.omdbapi.com/?apikey=65aa46e8&s=${title}&page=1`)
			.then(res => {
				this.setState({
					title: title,
					data: res.data.Search,
					page: 1,
					totalResults: res.data.totalResults,
				});
			})
	}

	handlePageClick = page => {
		axios.get(`http://www.omdbapi.com/?apikey=65aa46e8&s=${this.state.title}&page=${page}`)
			.then(res => {
				this.setState({
					data: res.data.Search,
					page,
				});
			})
	}

	openMovie = id => {

		if(id) {
			axios.get(`http://www.omdbapi.com/?apikey=65aa46e8&i=${id}`)
				.then(res => {
					this.setState({
						dataPage: res.data,
						mode: true
					});
				})
		}
	}

	clickBack = () => {
		this.setState({
			mode: false
		})
	}

	render () {
		return (
			<div className="App">
				{this.state.mode
				? <React.Fragment>
					<MoviePage 
						dataPage = {this.state.dataPage}
						clickBack = {this.clickBack	}
					/>
				</React.Fragment>
				:<React.Fragment>
					<Header 
						handleSearchMovies={this.handleSearchMovies}
						data={this.state.data}
						openMovie={this.openMovie}
					/>
				<MoviesList
					movies = {this.state.data}
					openMovie={this.openMovie}
				/>
				<MoviesPagination
					handlePageClick={this.handlePageClick}
					page={this.state.page}
					totalResults={this.state.totalResults}
				/>
				</React.Fragment>
				}
			</div>
		);
	}
 
}

export default App;
