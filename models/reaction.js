const { Schema, model } = require("mongoose");

// Schema to create a course model
const reactionSchema = new Schema({
  reactionId: {
    type: ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: date.format(Date, "YYYY/MM/DD HH:mm:ss"),
  },
});

module.exports = reactionSchema;
