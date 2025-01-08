
//Gets a list of Movies
export const getMovies = async () => {
    const response = await fetch(
        'http://localhost:8080/api/movies', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return response.json();
};

//Gets a Movie based on its id
export const getMovie = async (args) => {
    console.log("queryKey:", args.queryKey);
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
        `http://localhost:8080/api/movies/tmdb/movie/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return response.json();
};


//Gets upcoming movies
export const getUpcoming = async () => {
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/upcoming', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return response.json();
};

//Gets all genres
export const getGenres = async () => {
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/genres', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return response.json();
};

//Gets top rated movies
export const getTopRated = async () => {
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/topRated', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return response.json();
};

//Gets trending movies
export const getTrending = async () => {
    const response = await fetch(
        'http://localhost:8080/api/movies/tmdb/trending/', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return response.json();
};

//Gets movie recommendations based on id of current movie
export const getMovieRecommendations = async (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
        `http://localhost:8080/api/movies/tmdb/recommendations/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return response.json();
};

//Gets images for movie based on its id
export const getMovieImages = async (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
        `http://localhost:8080/api/movies/tmdb/movie/${id}/images`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return response.json();
};

//Gets reviews for a movie based on its id
export const getMovieReviews = async (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
        `http://localhost:8080/api/movies/tmdb/movie/${id}/reviews`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return response.json();
};

//authenticates login
export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

//creates new user
export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};