import React from "react";
import { getTopRated } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchlistIcon from '../components/cardIcons/addToWatchlist'
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const TopRatedMoviesPage = (props) => {

    const {  data, error, isLoading, isError }  = useQuery('topRated', getTopRated)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;

    // Redundant, but necessary to avoid app crashing.
    const watchlist = movies.filter(m => m.favorite)
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
    const addToWatchlist = (movieId) => true


    return (
        <PageTemplate
            title="Top Rated Movies"
            movies={movies}
            action={(movie) => {
                return (
                    <>
                        <AddToFavoritesIcon movie={movie} />
                        <AddToWatchlistIcon movie={movie} />
                    </>
                )
            }}
        />
    );
};
export default TopRatedMoviesPage;