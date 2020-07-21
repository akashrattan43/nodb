// const robocontrol = require('./controllers/robocontrol');
const rbc = require('./controllers/roboControllers')
const express = require('express')
const app = express();


app.use(express.json());
app.get('/api/customers', rbc.getAll)




app.listen(3999, () => console.log('Server is Running on 3999'))