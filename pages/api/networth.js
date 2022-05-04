
export default async function handler(req, res) {
    const response = await fetch(`http://skyhelper:3000/v1/profiles/${req.query.user}?key=${req.query.key}`)
    const jsonData = await response.json()
    if (jsonData.profile && jsonData.profile.total_networth) {
        res.status(200).json(jsonData.profile)
    } else if (jsonData.profile?.username) {
        res.status(404).json({status: 404,reason: 'inventory api is deactivated'})
    } else if (jsonData.reason == 'Invalid Hypixel API token provided') {
        res.status(403).json({status: 403,reason: jsonData.reason})
    } else {
        res.status(422).json({status: 422,reason: jsonData.reason})
    }

}
