import React from "react";
import { getUpcoming } from "../api/movies-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchlistIcon from '../components/cardIcons/addToWatchlist'
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const UpcomingMoviesPage = (props) => {

    const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcoming)

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
            title="Upcoming Movies"
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
export default UpcomingMoviesPage;