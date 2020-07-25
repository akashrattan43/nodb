// const robocontrol = require('./controllers/robocontrol');
const rbc = require('./controllers/roboControllers')
const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


   app.use(cors());
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
   app.use(bodyParser.json());

   app.use(express.json());
   app.get('/api/customers', rbc.getAll);
   app.get('/api/employee/:id', rbc.findOne)
   app.delete('/api/employee/:id', rbc.deleteCustomer)
   app.post('/api/employee/create', rbc.createCustomer)
   app.patch('/api/employee/edit/:id', rbc.editCustomer)

module.exports = app;