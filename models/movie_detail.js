// Require Mongoose
var mongoose = require("mongoose");

// Define a schema
var Schema = mongoose.Schema;

const MovieDetailSchema = new Schema({
  id: Number,
  title: String,
  vote_average: Number,
  popularity: String,
  vote_count: Number,
  overview: String,
  release_date: String,
  popularity: Number,
  original_language: String,
  imdb_id: String,
  poster_path: String,
  backdrop_path: String
  
});
