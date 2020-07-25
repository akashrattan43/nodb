const { json } = require("body-parser");
const fs = require("fs");


const customers = [
    {
        id: 1,
        name: 'sony singh',
        username: 'sony',
        email: 'Sonysingh@gmail.com'
        },
        {
        id: 2,
        name: 'h2go flask',
        username: 'holy',
        email: 'holymelnf@gmail.com'
        },
        {
        id: 3,
        name: 'yo yo',
        username: 'yo',
        email: 'yoyo@gmail.com'
        },
        {
        id: 4,
        name: 'john cena',
        username: 'john',
        email: 'johncena@gmail.com'
        },
        {
        id: 5,
        name: 'dwane johnson ',
        username: 'dwane',
        email: 'rocktheactor@gmail.com'
        },
        {
        id: 6,
        name: 'dr stranger',
        username: 'doctor',
        email: 'doctor@gmail.com'
        },
        {
        id: 7,
        name: 'spiderman peter',
        username: 'spiderman',
        email: 'spider@gmail.com'
        },
        {
        id: 8,
        name: 'batman almighty',
        username: 'batman',
        email: 'batman@gmail.com'
        },
        {
        id: 9,
        name: 'clark superman',
        username: 'clark',
        email: 'superman@gmail.com'
        },
        {
        id: 10,
        name: 'flash bary',
        username: 'flash',
        email: 'theflash@gmail.com'
        },
        {
        id: 11,
        name: 'green latern',
        username: 'green',
        email: 'latern@gmail.com'
        },
        {
        id: 12,
        name: 'johnny depp',
        username: 'johnny',
        email: 'depp@gmail.com'
        },
        {
        id: 13,
        name: 'lucifer hell king',
        username: 'luci',
        email: 'kingofhell@gmail.com'
        },
        {
        id: 14,
        name: 'undertaker wwe',
        username: 'undertaker',
        email: 'oldguy@gmail.com'
        },
        {
        id: 15,
        name: 'who this',
        username: 'who',
        email: 'whothis@gmail.com'
        }
    ];
    /**
     * Let user find an employee
     * @param {object} req
     * @param {object} res
     * @returns {object} json response
    */
   const findOne = (req, res) => {
       console.log(req.params.id)
       let id = req.params.id
       fs.readFile('controllers/custo.json', (err, data) => {
        if (err) {
            return res.status(400).send(err)
        };
        console.log(JSON.parse(data))
        let employees = JSON.parse(data)
        let customer = employees.filter( (user) => user.id == id)
        res.status(200).json(customer)
    });

     
         
    }

    /**
     * Let user deletes an employee
     * @param {object} req
     * @param {object} res
     * @returns {object} json response
    */
    const deleteCustomer = ( req, res ) => {
        const id = req.params.id-1;
        fs.readFile('controllers/custo.json', (err, data) => {
            if (err) {
                return res.status(400).send(err)
            } else {
            console.log(JSON.parse(data))
            let employees = JSON.parse(data)
            const deleteCustomer = employees.filter((customer) => {
                customer.id !== id
            })
            if (deleteCustomer.length > 0) {
    
                let newDetails = JSON.stringify(deleteCustomer, null, '\t')
   
                fs.writeFile('controllers/custo.json', newDetails, function (err) {
                   if (err) return res.status(400).json({err});
                   console.log('deleted!');
                   res.status(200).json({"message": 'Deleted Successfully'})
                 });
       }
    }
            
    })
    
        
    };

    /**
     * Let user create an employee
     * @param {object} req
     * @param {object} res
     * @returns {object} json response
    */
    const createCustomer = (req , res ) => {
        console.log('customer created')
        fs.appendFile('controllers/custo.json', JSON.stringify(req.body, null, '\t'), function (err) {
            if (err) {
                return res.status(404).json({err})
            };
            console.log('Updated!');
            res.status(201).json({message: "new user created"})
          });
        const newCustomers = customers.push(res.body)


    }

    /**
     * Let user edit an employee
     * @param {object} req the body is only name
     * @param {object} res
     * @returns {object} json response
    */
   const editCustomer = (req , res ) => {
    let id = req.params.id
    fs.readFile('controllers/custo.json', (err, data) => {
        if (err) {
            return res.status(400).send(err)
        };
        console.log(JSON.parse(data))
        let employees = JSON.parse(data)
        const editCustomer = employees.filter((customer) => {
            customer.id === id
        })
        if (editCustomer.length > 0) {
            editCustomer[0].name = req.body.name

            let newData = employees.splice(id-1, editCustomer, 1)

            let newDetails = JSON.stringify(newData, null, '\t')

            fs.writeFile('controllers/custo.json', newDetails, function (err) {
               if (err) return res.status(400).json({err});
               console.log('Replaced!');
               res.status(201).json({"message": 'Edited Successfully'})
             });
            
       }else{
           console.log('nothing to edit')
           return res.status(404).json({"message": "could not edit customer"})
       }
       

    })
    
    //return res.json(newCustomers)

}

    


module.exports = {
    getAll: (req, res) => {
        fs.readFile('controllers/custo.json', (err, data) => {
            if (err) {
                return res.status(400).send(err)
            };
            console.log(JSON.parse(data))
            let employees = JSON.parse(data)
            res.status(200).json(employees)
        });
        
        //res.json(customers)
    },
    findOne,
    deleteCustomer,
    createCustomer,
    editCustomer

    
}