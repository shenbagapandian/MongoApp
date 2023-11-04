import express,{Request,Response} from "express";

const routes = express.Router()

routes.get('/filter', [] ,(req: Request,res: Response)=> {
    res.send("success")
})

export {routes as filterRouter}