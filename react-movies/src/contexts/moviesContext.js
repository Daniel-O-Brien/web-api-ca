import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
    const [watchlist, setWatchlist] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

    const addToWatchlist = (movie) => {
        let newWatchlist = [];
        if (!watchlist.includes(movie.id)){
            newWatchlist = [...watchlist, movie.id];
        }
        else{
            newWatchlist = [...watchlist];
        }
        setWatchlist(newWatchlist)
        console.log(watchlist);
    };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

    const removeFromWatchlist = (movie) => {
        setWatchlist( watchlist.filter(
            (mId) => mId !== movie.id
        ) )
    };

  return (
      <MoviesContext.Provider
          value={{
            favorites,
              watchlist,
            addToFavorites,
            removeFromFavorites,
            addReview,
              addToWatchlist,
              removeFromWatchlist
          }}
      >
        {props.children}
      </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;