const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute');
const bodyParser = require('body-parser');



dotenv.config()

const app = express();
app.use(bodyParser.json());
app.use('/auth' , userRoute)
app.use('/post' , postRoute)

//Connection to database
mongoose.connect(process.env.MONGO_DB_URI )
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(`DB connection error: ${err.message}`));

app.listen(process.env.PORT , () => {
    console.log(`server is running on port ${process.env.PORT}`)

})

