const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: date.format(Date, "YYYY/MM/DD HH:mm:ss"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// should the getter on line 16 be set up down here?
// thoughtSchema.get(function () {
//   return;
// });

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
