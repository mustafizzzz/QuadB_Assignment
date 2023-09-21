const express = require('express')
const colors = require('colors')
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes')
const cryptoRoutes = require('./routes/cryptoRoutes')


//database config
connectDB();



//rest object
const app = express()

//middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))



//routes
app.use('/api/v1/auth', userRoutes)
app.use('/api/v1/data', cryptoRoutes)




const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.bgGreen.white);
})