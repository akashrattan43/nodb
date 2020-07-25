const { json } = require("body-parser");

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
     let customer = customers.filter( (user) => user.id == (req.params.id))
     console.log(customer)
     res.json(customer)
    }

    /**
     * Let user deletes an employee
     * @param {object} req
     * @param {object} res
     * @returns {object} json response
    */
    const deleteCustomer = ( req, res ) => {
        const id = req.params.id - 1;
        let customersRemain = customers.splice(id, 1);
        return res.json(customersRemain)
    }

    /**
     * Let user create an employee
     * @param {object} req
     * @param {object} res
     * @returns {object} json response
    */
    const createCustomer = (req , res ) => {
        console.log('customer created')
        const newCustomers = customer.push(res.body)
        return res.json(newCustomers)

    }

    /**
     * Let user edit an employee
     * @param {object} req
     * @param {object} res
     * @returns {object} json response
    */
   const editCustomer = (req , res ) => {
    console.log('customer created')
    const newCustomers = customer.push(res.body)
    return res.json(newCustomers)

}

    


module.exports = {
    getAll: (req, res) => {
        res.json(customers)
    },
    findOne,
    deleteCustomer,
    createCustomer,
    editCustomer
}