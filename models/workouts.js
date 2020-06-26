//dependencies that are required
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//sets up workout Schema and creates a new one with input
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Exercise Type is required",
      },
      name: {
        type: String,
        required: "Exercise Name is required",
      },
      weight: {
        type: Number,
        required: true,
      },
      sets: {
        type: Number,
        required: true,
      },
      reps: {
        type: Number,
        required: true,
      },
      resistanceDuration: {
        type: Number,
        required: true,
      },
      cardioName: {
        type: String,
        required: "Exercise Name is required",
      },
      distance: {
        type: Number,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
    },
  ],
});

//sets up mongoose model
const Workout = mongoose.model("Workouts", workoutSchema);

module.exports = Workout;
