import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");


    const movies = [
        { id: 1, title: "film 1", release_date: "2026" },
        { id: 2, title: "matrix", release_date: "2000" },
        { id: 3, title: "reze arc", release_date: "2026" }
    ]

    const handleSearch = (e) => {
    alert(searchQuery)
    e.preventDefault();
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for a movie..." 
            className="search-input" 
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            />
        


            <button type="submit" className="search-button">Search</button>

        </form>
        <div className="movie-grid">
            {movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard key={movie.id} movie={movie} />)}
        </div>

    </div>
}

export default Home;