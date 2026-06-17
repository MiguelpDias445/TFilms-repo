import { useParams } from 'react-router-dom';
import "../css/MovieInfo.css";

function MovieInfo() {
  const { id } = useParams();
  const { title } = useParams();

  return (
    <div>
      <h1>Movie Details</h1>
      <p>Movie Name: { title }</p>
      <p>Movie ID: {id}</p>
    </div>
  );
}

export default MovieInfo;