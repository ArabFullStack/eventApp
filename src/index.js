const express = require('express')   
const app = express();
require('dotenv').config();               
const port = process.env.PORT;
const dbsetup = require('./database/setup');

const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');

const {seedAdmin} = require('./seeders/admin');
app.use(express.json());

dbsetup(); 

app.use('/auth', authRoutes)
app.use(eventRoutes)
 
const Event = require('./models/event')            


app.listen(port, ()=>console.log(`app is listening on ${port}`));