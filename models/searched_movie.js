// Require Mongoose
var mongoose = require("mongoose");

// Define a schema
var Schema = mongoose.Schema;

const SearchedMovieSchema = new Schema({
  id: Number,
  title: String,
  overview: String,
  release_date: String,
  poster_path: String
});
