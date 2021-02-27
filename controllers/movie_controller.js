// HTTP Package
const axios = require("axios");
var bodyParser = require("body-parser");
var express = require("express");
var router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
var async = require("async");

exports.index = function (req, res) {
  res.send("Welcome to the Movie Club REST API");
};

exports.movie_search_byName = function (req, res) {
  const name = req.params.name;
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=7d8d921c3bb449e364cbd2dc4015ed6e&language=en-US&query=" +
    name +
    "&page=1&include_adult=false";

  const getMovies = async () => {
    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const movieList = async () => {
    const movies = [];
    const result = await getMovies();

    for (i = 0; i < result.results.length; i++) {
      movies.push({
        id: result.results[i].id,
        title: result.results[i].title,
        overview: result.results[i].overview,
        release_date: result.results[i].release_date,
        poster_path: result.results[i].poster_path,
      });
    }
    //console.log(movies);
    res.json({ results: movies });
  };
  movieList();
};

exports.movie_search_byID = function (req, res) {
  const id = req.params.id;
  const url =
    "https://api.themoviedb.org/3/movie/" +
    id +
    "?api_key=31567953bc05e0b7239d1d228ded2f02&language=en-US";

  const getMovieDetail = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const movieDetail = async () => {
    const result = await getMovieDetail();
    res.json({
      id: result.id,
      title: result.title,
      vote_average: result.vote_average,
      popularity: result.popularity,
      vote_count: result.vote_count,
      overview: result.overview,
      release_date: result.release_date,
      original_language: result.original_language,
      imdb_id: result.imdb_id,
      poster_path: result.poster_path,
      backdrop_path: result.backdrop_path,
      tagline: result.tagline,
      genres: result.genres,
      runtime: result.runtime,
      production_companies: result.production_companies,
      revenue: result.revenue
    });
  };
  movieDetail();
};

exports.movie_backdrop_image = function (req, res) {
  const path = req.params.picturePath;
  const size = req.params.size;
  const url = "https://image.tmdb.org/t/p/" + size + "/" + path;

  res.redirect(url);
};

exports.movie_cover_image = function (req, res) {
  const path = req.params.picturePath;
  const size = req.params.size;
  const url = "https://image.tmdb.org/t/p/" + size + "/" + path;

  res.redirect(url);
};

exports.movie_recommendations = function (req, res) {
  const id = req.params.id;
  const url =
    "https://api.themoviedb.org/3/movie/" +
    id +
    "/recommendations?api_key=31567953bc05e0b7239d1d228ded2f02&language=en-US&page=1";
  const getMovieRecommendation = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const MovieRecommendation = async () => {
    const result = await getMovieRecommendation();
    res.json(result);
  };

  MovieRecommendation();
};

exports.movie_top_rated = function (req, res) {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=7d8d921c3bb449e364cbd2dc4015ed6e&language=en-US&page=1";
  const getTopRatedMovies = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const topRatedMovies = async () => {
    result = await getTopRatedMovies();
    res.json(result);
  };

  topRatedMovies();
};
