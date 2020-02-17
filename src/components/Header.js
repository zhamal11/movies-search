import React from 'react';
import SearchMovies from './SearchMovies';
import MoviesCarousel from './MoviesCarousel';

function Header({handleSearchMovies, data, openMovie}) {
    return <header className="App-header">
        <MoviesCarousel 
            data={data} 
            openMovie={openMovie}
        />
        <SearchMovies
            handleSearchMovies={handleSearchMovies}
        />  
    </header>
}

export default Header;