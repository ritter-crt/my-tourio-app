import dbConnect from "../../../db/connect";
import Attraction from "../../../db/models/Attraction";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const attractions = await Attraction.find();
      console.log(attractions);

      return response.status(200).json(attractions);
    } catch (error) {
      return response.status(404).json("Error");
    }
  }
}
