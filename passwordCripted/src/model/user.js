const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true

  },
  password: {
    type: String,
    required: true,
    unique: "true"
  }

})
const User = module.exports = mongoose.model('User', userSchema)

module.exports={User}