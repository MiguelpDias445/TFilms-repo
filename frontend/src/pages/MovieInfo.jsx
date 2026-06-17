import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";


function MovieInfo(){

    const { id } = useParams();

    const [movie, setMovie] = useState(null);


    async function getMovie(){

        const response = await api.get(`/movie/${id}`);

        setMovie(response.data);

    }


    useEffect(()=>{
        getMovie();
    },[]);


    if(!movie){
        return <h2>Loading...</h2>
    }


    return (
        <div>

            <h1>{movie.title}</h1>

            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />

            <p>{movie.overview}</p>

            <p>
                Lançamento: {movie.release_date}
            </p>

        </div>
    )
}

export default MovieInfo;