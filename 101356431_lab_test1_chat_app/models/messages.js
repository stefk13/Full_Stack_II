const mongoose = require('mongoose')

const messagesSchema = new mongoose.Schema({
    from_user: String,
    room: String,
    message: String,
    date_sent: { type: Date, default: Date.now }
  })

  const Messages = mongoose.model('Messages', messagesSchema)
  module.exports = Messages