import clientPromise from "../../../lib/mongodb";

export default async function lowestbin(req, res) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const lb = await db.collection("auctions").find({}).project({_id: 0, auction: {price: 1}, id: 1}).toArray();

    let id = lb.map(id => id.id);
    let prices = lb.map(prices => prices.auction.price);

    let result = Object.fromEntries(id.map((_, i) => [id[i], prices[i]]))

    res.json(JSON.stringify(result, Object.keys(result).sort()));
};
