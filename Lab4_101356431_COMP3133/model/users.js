const mongoose = require('mongoose')
const validator = require('validator')

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    trim: true,
    minlength: [4, "Username must be 4 characters or more"] 
  },
  email: {
    type: String,
    required: [true, "Please enter an email address"],
    trim: true,
    validate: {
      validator: function(value) {
        return validator.isEmail(value)
      },
      message: "Please enter a valid email address"
    }
  },
  city: {
    type: String,
    required: [true, "Please enter a city name"],
    trim: true,
    validate: {
      validator: function(value) {
        return /^[A-Za-z\s]+$/.test(value)
      },
      message: "City name can only contain alphabets and spaces"
    }
  },
  web: {
    type: String,
    required: [true, "Please enter a web URL"],
    validate: {
      validator: function(value) {
        return validator.isURL(value, { protocols: ['http','https'], require_protocol: true })
      },
      message: "Please enter a valid web URL"
    }
  },
  zip: {
    type: String,
    required: [true, "Please enter a zip code"],
    validate: {
      validator: function(value) {
        return /^\d{5}-\d{4}$/.test(value)
      },
      message: "Zip code must be in the format 12345-1234"
    }
  },
  phone: {
    type: String,
    required: [true, "Please enter a phone number"],
    validate: {
      validator: function(value) {
        return /^1-\d{3}-\d{3}-\d{4}$/.test(value)
      },
      message: "Phone number must be in the format 1-123-123-1234"
    }
  }
})

const Users = mongoose.model('Users', usersSchema)
module.exports = Users