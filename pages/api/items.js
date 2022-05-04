const fsp = require('fs').promises
export default async function items(req, res) {
    try {
        const {readFileSync} = require("fs");
        var path = require("path");
        const dataDirectory = path.resolve(process.cwd(), "data");
        const file = readFileSync(
            path.join(dataDirectory, "items.json"), "utf8");
        const json_data = JSON.parse(file)
        // Do stuff
        res.setHeader('Cache-Control', 'public,max-age=1440000')
        res.status(200).json(json_data)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error reading data'})
    }
}
