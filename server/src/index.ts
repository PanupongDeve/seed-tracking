import 'dotenv/config'
import express, { Request, Response} from 'express'
const compression = require('compression')
import helmet from "helmet";
import bodyParser from 'body-parser'
const cors = require('cors')
import { cloudFireStoreManger } from './databases/CloudFirestore'
import usersRputer from './routes/v1/users'

cloudFireStoreManger.init()

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(compression())
app.use(helmet())
app.use(cors())
app.use(usersRputer)


const PORT = process.env.SERVER_PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})