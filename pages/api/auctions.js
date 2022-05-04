import clientPromise from "../../lib/mongodb";

export default async function auctions(req, res) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const lb = await db.collection("auctions").find({}).toArray();

    res.json(JSON.stringify(lb));
};
