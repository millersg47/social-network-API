const { Schema, model, Types } = require("mongoose");
const date = require("date-and-time");

// reactionSchema to be a subdoc in thoughtSchema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
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
      //dateObj.getTimezoneOffset() causing an error when starting server
      get: (time) => date.format(time, "YYYY/MM/DD HH:mm:ss"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

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
      get: (time) => date.format(time, "YYYY/MM/DD HH:mm:ss"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
