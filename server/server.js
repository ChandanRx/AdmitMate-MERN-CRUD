require('dotenv').config()
const express = require('express')
const app = express()
const dbConnecion = require('./config/dbconnect')
const admissionRouter = require('./routes/admissionRoutes')
const cors = require('cors')


PORT = 3000


app.use(cors())
app.use(express.json())
app.use('/api/admission',admissionRouter)

dbConnecion().then(()=>{
    app.listen(PORT,()=>{
      console.log(`server is runnig at port ${PORT}`);
    })
})
