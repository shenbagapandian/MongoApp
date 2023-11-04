import express from "express";
import {json} from "body-parser";
import { filterRouter } from "./routes/filter";

const app = express()
app.use(json())
app.use(filterRouter)

app.listen(3000, () => {
    console.log("server initiated on port 3000")
})