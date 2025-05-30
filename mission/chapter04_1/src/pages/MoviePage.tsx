import { useState } from "react"
import { MovieResponse } from "../../../chapter03_1/src/types/movie";
import MovieCard from "../../../chapter03_1/src/components/MovieCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";

export default function MoviePage() {
    const {category} = useParams<{
        category : string;
    }>();
    const [page, setPage] = useState(1);
    const url = `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=${page}`;

    const { data : movies , isPending, isError } = useCustomFetch<MovieResponse>(url);

    
    if (isError) {
        return (
            <div className="flex justify-center">
                <span className="text-red-500 text-2xl">
                    에러가 발생했습니다.
                </span>
            </div>
        )
    }

    return (
        <>
            <div className = "flex items-center justify-center gap-6 mt-5">
                <button 
                    className = "bg-[#dda5e3] text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple transition-all duration-200 disabled:bg-gray-300 disabled:cursor-pointer disabled:cursor-not-allowed"
                    disabled = {page === 1} 
                    onClick = {() => setPage((prev) => prev - 1)}> 
                        {`<`} 
                </button>

                <span>
                    {page} 페이지
                </span>

                <button 
                    className = "bg-[#dda5e3] text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple transition-all duration-200 disabled:bg-gray-300 disabled:cursor-pointer"
                    onClick = {() => setPage((prev) => prev + 1)}> 
                        {`>`}
                </button>
            </div>

            {isPending && (
                <div className = "flex items-center justify-center h-dvh">
                    <LoadingSpinner/>
                </div>
            )}

            {!isPending} (
                <div className='grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
                    {movies?.results.map ((movie) => (<MovieCard key={movie.id} movie={movie} category={""}/>))}
                </div>
            )
        </>
    )
}
