import "../css/Favorites.css";
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Favorites() {

    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();


    async function getMovies() {
        try {
            const response = await api.get('/favorites');

            setMovies(response.data);

        } catch(error) {
            console.error("Erro ao buscar favoritos:", error);
        }
    }


    useEffect(() => {
        getMovies();
    }, []);



    async function removeFavorite(id) {
        try {

            await api.delete(`/favorites/${id}`);

            setMovies(
                movies.filter(movie => movie.id !== id)
            );

        } catch(error) {
            console.error("Erro ao remover favorito:", error);
        }
    }



    if (movies.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>Your favorites list is empty</h2>
                <p>
                    Start adding movies to your favorites list by clicking the heart icon on any movie.
                </p>
            </div>
        );
    }



    return (
        <div className="favorites">

            <h1>My Favorites</h1>


            <div className="movie-grid">

                {movies.map(movie => (

                    <div 
                        key={movie.id}
                        className="movie-card"
                    >

                        <div className="movie-poster">

                            <img
                                src={movie.poster}
                                alt={movie.title}
                            />


                            <div className="movie-overlay">

                                <button
                                    onClick={() => navigate(`/movie-info/${movie.movieId}`)}
                                >
                                    Check
                                </button>


                                <button
                                    className="favorite-btn"
                                    onClick={() => removeFavorite(movie.id)}
                                >
                                    ❌
                                </button>

                            </div>

                        </div>


                        <div className="movie-info">

                            <h2>
                                {movie.title}
                            </h2>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Favorites;