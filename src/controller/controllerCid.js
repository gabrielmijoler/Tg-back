const { response } = require("express");
const Cid = require("../model/Cid");

module.exports = {
    async get(req, res){
        try {
            const response = await Cid.findAll()
            console.log(response);
            return res.json(response);
        } catch (error) {
            console.log(error)
            res.json({error: error.message})
            return error
        }
    }
}
