import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import TrendingMoviesPage from './pages/trendingMoviesPage'
import TopRatedMoviesPage from './pages/topRatedMoviesPage'
import WatchlistMoviesPage from "./pages/watchlistMoviesPage";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import SignUpPage from "./pages/signUpPage";


const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000, 
        refetchOnWindowFocus: false
      },
    },
  });

  const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <AuthContextProvider>
          <MoviesContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={ <SignUpPage /> } />
              <Route path="*" element={ <Navigate to="/" /> } />
              <Route element={<ProtectedRoutes />}>
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
              <Route path="/movies/upcoming" element={ <UpcomingMoviesPage /> } />
              <Route path="/movies/trending" element={ <TrendingMoviesPage /> } />
              <Route path="/movies/toprated" element={ <TopRatedMoviesPage /> } />
              <Route path="/movies/watchlist" element={ <WatchlistMoviesPage /> } />
                <Route path="/api/" element={ <WatchlistMoviesPage /> } />
              </Route>
            </Routes>
          </MoviesContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);