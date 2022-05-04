import clientPromise from "../../../lib/mongodb";

export default async function average(req, res) {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const lb = await db.collection("auctions").aggregate([{$unwind: "$sales"}, {
        $group: {
            _id: "$id",
            avg: {$avg: "$sales.price"}
        }
    }]).toArray()

//  const lb = await db.collection("auctions").aggregate([{ $unwind: "$sales" }, { $group: { _id: "$id", t_count:{$sum: 1}, avg: { $sum: "$sales.price" } } },{ "$project" : { id: "$id", avg: {$divide:["$avg", "$t_count"]}}}]).toArray()

    let id = lb.map(id => id._id);
    let prices = lb.map(prices => prices.avg);
//  const average = prices.reduce((a, b) => a + b, 0) / prices.length
//  console.log(average)
    let result = Object.fromEntries(id.map((_, i) => [id[i], prices[i]]))

    res.json(JSON.stringify(result, Object.keys(result).sort()));
};
