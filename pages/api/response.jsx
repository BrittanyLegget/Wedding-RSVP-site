import clientPromise from "../../lib/mongodb";
import { ObjectId } from "bson";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await clientPromise;
    const db = client.db("Wedding");
    console.log(data);

    const result = await db.collection("RSVP").updateOne(
      { _id: new ObjectId(data.g._id) },
      {
        $set: { "guests.$[elem].successful": data.v },
        $set: { "guests.$[elem].attending": data.v },
      },
      {
        arrayFilters: [{ "elem.guest": { $eq: data.e.guest } }],
      }
    );
    res.status(201).json({ result });
  }
  if (req.method === "GET") {
    const client = await clientPromise;
    const db = client.db("Wedding");
    const query = req.body;

    let guests = await db.collection("RSVP").find({ code: query }).toArray();
    guests = JSON.parse(JSON.stringify(guests));
    res.status(201).json({ guests });
  }
}
