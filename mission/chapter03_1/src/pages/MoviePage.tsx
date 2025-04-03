import axios from "axios";
import { useEffect, useState } from "react"
import { Movie, MovieResponse } from "../../../chapter03_1/src/types/movie";
import MovieCard from "../../../chapter03_1/src/components/MovieCard";

export default function MoviePage() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect (() => {
        const fetchMovies = async () => {

        const {data} = await axios.get<MovieResponse> (
            `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, 
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,   
                },
            },
        )

        setMovies(data.results);
    }

    fetchMovies();

    }, []);

    return (
        <>
            <div className='grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
                {movies.map ((movie) => (<MovieCard key = {movie.id} movie = {movie}/>))}
            </div>
        </>
    )
}
