const express = require('express')   
const app = express();               
const port = 4000;
const dbsetup = require('./database/setup');
const eventRoutes = require('./routes/eventRoutes');

app.use(express.json());

dbsetup(); 

app.use(eventRoutes)
 
const Event = require('./models/event')            


app.listen(port, ()=>console.log(`app is listening on ${port}`));