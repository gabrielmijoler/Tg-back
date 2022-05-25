const User = require("../model/User");
const db = require("../config/database");

module.exports = {
    async post(req, res){
        try {
            const response = await User.create(req.body)
            return res.json(response)
        } catch (error) {
            return error
        }
    }
}
