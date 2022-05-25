const Cid = require("../model/Cid");

module.exports = {
    async get(req, res){
        try {
            const response = await Cid.findAll()
            return res.json(response)
        } catch (error) {
            
        }
    }
}
