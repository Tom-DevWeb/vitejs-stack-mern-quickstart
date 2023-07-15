import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import './db/conn.mjs'

const PORT = process.env.PORT || 5050
const app = express()

app.use(cors())
app.use(express.json())

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
