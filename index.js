const express = require("express")
const app = express();
const cors = require('cors');
const {query} = require("express");
const port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hey man')
})

const users = [
    {
        id: 1,
        name: 'kanak',
        email: 'kanak@gmail.com'
    },
    {
        id: 2,
        name: 'kamin',
        email: 'Alamin@gmail.com'
    },
    {
        id: 3,
        name: 'Ranak',
        email: 'eanak@gmail.com'
    },
    {
        id: 4,
        name: 'Pianak',
        email: 'pianak@gmail.com'
    }, {
        id: 5,
        name: 'Mianak',
        email: 'mianak@gmail.com'
    }, {
        id: 6,
        name: 'dana',
        email: 'dana@gmail.com'
    }, {
        id: 7,
        name: 'Pori',
        email: 'pori@gmail.com'
    }
]


app.get('/users', (req, res) => { /* res.send({id: 101, name: 'kanak', city: "dhaka"}) */

    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    } else {
        res.send(users)
    }

    /*   console.log('query',req.query); */
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id
    const user = users.find(u => u.id == id)
    res.send(user)

})
app.get("/furits", (req, res) => {
    res.send(['mango', 'apple', 'gouva'])
})

app.get('/fuirts/mango/fazle', (req, res) => {
    res.send('its very testy')
})

app.post('/user', (req, res) => {
    console.log('request', req.body);

    const user = req.body;
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})


app.listen(port, () => {
    console.log("okay", port);
})
