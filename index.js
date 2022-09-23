const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const port = process.env.PORT || 3000
const form = require("./api/form")

//connect to the mongodb
app.use(cors())
app.use(express.json())
const connection = "mongodb+srv://Muchmark:mLlrGljRs180tAAS@cluster0.irij3nk.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(connection).then((res) => {

}).catch((err) => {
    console.log(err)
})

app.get("/", (req, res) => [
    res.status(200).send("connected succesfull...")
])


app.use("/api/form", form);

app.listen(port, () => { })