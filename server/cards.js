// const robocontrol = require('./controllers/robocontrol');

const express = require('express')
const app = express();

app.use(express.json());
// app.get ('/api/employees', robocontrol.getEmployee)



app.listen(3999, () => console.log('Server is Running on 3999'))