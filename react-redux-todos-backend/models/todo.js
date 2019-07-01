const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/react-redux-todos", {
  useNewUrlParser: true
});
mongoose.set("debug", true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: {
    type: String
    // required: "you need this"
  }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
