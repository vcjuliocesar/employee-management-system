import express from 'express'
import { Request,Response} from 'express'

const app = express()

app.use(express.json()) // middleware que transforma la req.body a un json

const PORT = 3000

app.get('/ping',(_req:Request,res:Response)=> {
    console.log('someone pinged here !!')
    res.send('pong')
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})