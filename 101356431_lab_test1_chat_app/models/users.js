const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: [true, "Please Enter Username"],
        unique: [true, "Username is Already Taken"],
        trim: true 
    },
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String, 
        validate: {
            validator: function(value) {
                var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
                return passwordRegex.test(value);
            },
            message: props => `${props.value} Password must be at least 6 characters and contain a letter and number`
        }
    },
    createdon: { 
        type: Date, 
        default: Date.now 
    }
  })

  const Users = mongoose.model('Users', usersSchema)
  module.exports = Users