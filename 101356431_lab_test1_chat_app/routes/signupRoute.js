const express = require('express')
const User = require('../models/users') 
const router = express.Router()

router.post('/signup', async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.status(201).send({ message: 'User created successfully.' })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

module.exports = router
