import mongoose from "mongoose";
const { Schema } = mongoose;

const attractionSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true }
});

// connecting through mongoose to cards collection in the database.
// is not case sensitive

const Attraction = mongoose.models.Attraction || mongoose.model("Attraction", attractionSchema);
export default Attraction;
