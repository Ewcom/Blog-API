const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require("dotenv").config()
const mongoose = require('mongoose');

const entryRoute = require('./routes/entries')

const app = express()


//connect to DB
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MONGODB connected'))
    .catch(err => console.log(err))



    
//MIDDLEWARE
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json());
app.use('/api/entry', entryRoute)



app.listen(process.env.PORT || 8080, () => {
    console.log("API opened on port 8080")
})


