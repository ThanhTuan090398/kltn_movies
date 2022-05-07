const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
    duration: { type: String },
    stageName: { type: Array },
    imdb: { type: String },
    director: {
      directorName: { type: String },
      directorAva: { type: String },
      directorNations: { type: String },
      directorDesc: { type: String },
      movieJoin: { type: Array },
    },
    producer: { type: Array },
    filmLocations: { type: String },
    writer: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
