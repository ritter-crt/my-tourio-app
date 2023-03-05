// import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {

  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();
      console.log(places);

      return response.status(200).json(places);
    } catch (error) {
      return response.status(404).json("Error");
    }
  }
}
