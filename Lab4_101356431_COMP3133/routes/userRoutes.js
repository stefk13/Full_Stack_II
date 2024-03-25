const express = require('express')
const userModel = require('../model/users.js')
const fs = require('fs').promises
const router = express.Router()

//http://localhost:3000/user
router.post('/user', async (req, res) => {
    
    
    try {
    

        const data = await fs.readFile('UsersData.json', 'utf8')
        const userData = JSON.parse(data)
        const user = new userModel(userData)
        await user.save()
        res.send(user)

      }

    catch (err) {
      res.status(500).send({ message: "An error occurred", error: err.message });
    }
  })

  module.exports = router