import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

function Movies(props) {
  const {movies, setMovies} = props;

  function handleAddMovie() {
    const movie = {
      id: nanoid(),
      title: "Jigsaw",
      year: "2021",
      type: "Movie",
      poster: "https://picsum.photos/300/400"
    }

    setMovies([...movies, movie])
  }

  function AddMovieForm(props) {
    const {movies, setMovies} = props;
  
    function handleSubmit(e) {
      e.preventDefault();
  
      const movie = {
        id: nanoid(), title: title,
        year: date, type: "Movie",
        poster: "https://picsum.photos/300/400",
      };

      setMovies([...movies, movie])
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.moviesTitle}>Latest Movies</h2>
        <div className={styles.movieContainer}>
          
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />
          })}
        
        </div>
        <button onClick={handleAddMovie}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;