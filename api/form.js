const express = require("express")
const router = express.Router();
const Model = require("../Models/models")

router.post('/', (req, res) => {

    const data = req.body;

    if (data) {
        let Entry = new Model(data);
        Entry.save().then((res) => {


        }).catch((err) => {
            res.status(400).send("error occured..")
        })
        res.status(200).send("entry addded")
    }
    else {
        res.status(400).send("error occured..")
    }
})
module.exports = router;