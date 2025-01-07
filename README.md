# Assignment 2 - Web API.

Name: Daniel O'Brien

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)

+ Feature 1
+ Feature 2
+ Feature 3
+ etc

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:


react-movies .env file

----------------------------
REACT_APP_TMDB_KEY="apikey"

FAST_REFRESH=false

-----------------------------

movies-api .env file

______________________
secret=YourJWTSecret
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=YourMongoURL
SECRET=ilikecake
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following:

- /api/movies | GET | Gets a list of movies
- /api/movies/{movieid} | GET | Gets a single movie
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie
- /login" | GET | login
- /signup | GET | signup
- /movies/favorites | GET | Gets Favourite Movies
- /reviews/:id | GET | Gets reviews for movie
- /movies/:id" | GET | Gets Movies
- /reviews/form | GET | Brings you to a form to leave a review
- /movies/upcoming | GET | Gets upcoming movies
- /movies/trending" | GET | Gets trending movies
- /movies/toprated | GET | Gets toprated movies
- /movies/watchlist | GET | Gets watchlist

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

I'm using a JWT-based Authentication
The routes that are protected are 

- /movies/favorites
- /reviews/:id
- /movies/:id
- /reviews/form
- /movies/upcoming
- /movies/trending
- /movies/toprated
- /movies/watchlist

## Integrating with React App

The Home page and Upcoming movies is getting the movies through the movies-api


## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   
