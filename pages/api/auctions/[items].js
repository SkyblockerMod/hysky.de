import clientPromise from "../../../lib/mongodb";

export default async function auctions(req, res) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const {items} = req.query

    const lb = await db.collection("auctions").aggregate([{$match:{id: `${items}`}}, {
        "$project": {
            _id: 0,
            id: "$id",
            auction: {seller: 1, price:1}
        }
    }]).toArray();

    const auction = {
      id: lb[0].id,
      seller_id: lb[0].auction.seller,
      price: lb[0].auction.price
    };

    res.json(JSON.stringify(auction))
};

