import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {

    try {
      console.log(request.body)
      const placeData = request.body;
      const place = new Place(placeData);
      console.log(placeData)
      await place.save();

      response.status(201).json({ status: "Place created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}