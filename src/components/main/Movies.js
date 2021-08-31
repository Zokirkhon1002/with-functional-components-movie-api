import Movie from "./movie";

export default function Movies(props) {
    const { movies = [] } = props;

    return(
        <div className="movies">
            {movies.length ? movies.map(movie=> (
                <Movie key={movie.imdbID} {...movie} />
            )) : <h2>Kechirasiz, hech narsa topilmadi. kiritilgan ma'lumotni tekshirib qaytadan kiriting.</h2>}
        </div>
    )
}




// {movies.map(movie => (
//     <Movie key={movie.imdbID} {...movie} />
// ))}