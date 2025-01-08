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

export const getMovie = async (args) => {
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

export const getMovieImages = async (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    const response = await fetch(
        `http://localhost:8080/api/movies/tmdb/${id}/images`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    )
    return response.json();
};

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