import clientPromise from "../../lib/mongodb";

export default async function auctions(req, res) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const lb = await db.collection("bazaar").aggregate([{
        "$project": {
            _id: 0,
            id: "$id",
            name: "$name",
            buyOrders: "$buyOrders",
            sellOrders: "$sellOrders",
            buyPrice: "$buyPrice",
            sellPrice: "$sellPrice",
            buyVolume: "$buyVolume",
            sellVolume: "$sellVolume",
            price: "$price"
        }
    }]).toArray();

    let id = lb.map(id => id.id);
    let result = Object.fromEntries(id.map((_, i) => [id[i], lb[i]]))

    res.json(JSON.stringify(result))
};
