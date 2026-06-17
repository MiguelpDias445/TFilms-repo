import "../css/Favorites.css"
import api from '../../services/api'
import { useEffect, useState } from 'react'

function Favorites() {

    const [movies, setMovies] = useState([])

    async function getMovies() {
        const moviesFromApi = await api.get('/favorites')
        setMovies(moviesFromApi.data)
        console.log(movies)
    }

    useEffect(() => {
        getMovies()
    }, [])

    if (movies.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>Your favorites list is empty</h2>
                <p>
                    Start adding movies to your favorites list by clicking the heart icon on any movie.
                </p>
            </div>
        )
    }

    return (
        <div className="favorites">
            <h1>My Favorites</h1>

            {movies.map(movie => (
                <div key={movie.id} className="favorite-movie">
                    <h2>{movie.title}</h2>

                    {movie.poster && (
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            width="150"
                        />
                    )}
                </div>
            ))}
        </div>
    )
}

export default Favorites