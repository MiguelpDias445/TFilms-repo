import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const movies = [
        { id: 1, title: "film 1", release_date: "2026" },
        { id: 2, title: "film 2", release_date: "2027" },
        { id: 3, title: "film 3", release_date: "2028" }
    ]

    const handleSearch = () => {}

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for a movie..." 
            className="search-input" />
            <button type="submit" className="search-button">Search</button>

        </form>
        <div className="movie-grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </div>

    </div>
}

export default Home;