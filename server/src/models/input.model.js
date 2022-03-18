const mongoose = require('mongoose')

const inputSchema = mongoose.Schema(
  {
    inputText: { type: String, required: true },
  },
  { versionKey: false, timestamps: true },
)

const InputBox = mongoose.model('input', inputSchema)

module.exports = InputBox
