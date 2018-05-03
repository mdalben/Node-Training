import * as express from 'express'
import * as multer from 'multer'
import * as cors from 'cors'
import * as fs from 'fs'
import * as Loki from 'lokijs'
import * as path from 'path'
import { loadCollection } from './utils'

//setup
const PORT = 3000
const DB_NAME = 'db.json'
const COLLECTION_NAME = 'images'
const UPLOAD_PATH = 'uploads'
const upload = multer({ dest: `${UPLOAD_PATH}/` })
const db = new Loki(`${UPLOAD_PATH}/${DB_NAME}`, { persistenceMethod: 'fs'})

//app
const app = express()
app.use(cors())

app.post('/profile', upload.single('avatar'), async(req, res) => {
    try {
        const col = await loadCollection(COLLECTION_NAME, db)
        const data = col.insert(req.file)
        console.log(data)
        db.saveDatabase()
        res.send({ id: data.$loki, filename: data.filename, originalName: data.originalname})
    } catch (err) {
        res.sendStatus(400)
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})