import mongoose from "mongoose";
const { Schema } = mongoose;

const placeSchema = new Schema({
  // name: { type: String, required: true },
  // location: { type: String, required: true },
  // image: { type: String, required: true },
  // mapURL: { type: String, required: true },
  // description: { type: String, required: true }

  name: String, 
  location: String, 
  image: String, 
  mapURL: String, 
  description: String, 
});

// connecting through mongoose to cards collection in the database.
// is not case sensitive

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);
export default Place;
