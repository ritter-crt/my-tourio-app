import mongoose from "mongoose";
const { Schema } = mongoose;

const placeSchema = new Schema({
  name: String,
  location: String,
  image: String,
  mapURL: String,
  description: String,
});

// connecting through mongoose to cards collection in the database.
// is not case sensitive
// this needs to            same name as in db = places -> Places

const Place = mongoose.models.Places || mongoose.model("Places", placeSchema);
export default Place;
