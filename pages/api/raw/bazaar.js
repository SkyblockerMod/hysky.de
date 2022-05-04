import clientPromise from "../../../lib/mongodb";

export default async function bazaar(req, res) {
    const client = await clientPromise;
    const db = client.db("hysky");

    const lb = await db.collection("bazaar").find({}).toArray();

    res.json(JSON.stringify(lb));
};
