import dbConnect from "../../../db/connect";
import Attraction from "../../../db/models/Attraction";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    console.log("test");
    try {
      const placeData = request.body;
      console.log("PRODUCTDATA", placeData);
      const place = new Attraction(placeData);
      await place.save();

      response.status(201).json({ status: "Place created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
