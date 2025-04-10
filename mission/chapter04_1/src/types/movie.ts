export type BaseMovie = {
    adult : boolean;
    backdrop_path : string;
    id : number;
    original_language : string
    original_title : string;
    overview : string;
    popularity : number;
    poster_path : string;
    release_date : string;
    title : string;
    video : boolean;
    vote_average : number;
    vote_count : number;
}

export type Movie = BaseMovie & {
    genre_ids : number[];
}

export type MovieResponse = {
    page : number;
    totalPage : number;
    total_results : number;
    results : Movie[];
}