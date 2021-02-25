var express = require("express");
var router = express.Router();

// Require controllers.
var movie_controller = require("../controllers/movie_controller");

// ! Routes

// Get API home page.
router.get("/", movie_controller.index);

// * Requests by Name

// Get Request for searching movies by Name.
router.get("/movie/search/:name", movie_controller.movie_search_byName);

// * GET REQUESTS by ID

// Searching movies
router.get("/movie/search/id/:id", movie_controller.movie_search_byID);

// Getting movie backdrop
router.get("/movie/image/backdrop/:size/:picturePath", movie_controller.movie_backdrop_image);

// Getting movie cover
router.get("/movie/image/cover/:size/:picturePath", movie_controller.movie_cover_image);

// Recommendation
router.get("/movie/recommendations/:id", movie_controller.movie_recommendations);

// * //

// Top Rated Movies
router.get("/movie/top_rated/", movie_controller.movie_top_rated);

module.exports = router;
