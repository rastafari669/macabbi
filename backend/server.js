const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routesUrls = require('./routes/routes');
const cors = require('cors');



mongoose.connect(`mongodb+srv://rock:rock@cluster0.gms93.mongodb.net/mytable?retryWrites=true&w=majority`,
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true 
},
() => console.log('Database Connected!'));

//admittited body parser //middlware
app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)
app.listen(4000, () => 
console.log('Server in up and running!')
)