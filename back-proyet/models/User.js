const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      enum: ["admin", "basic", "owner"],
      type: String,
      default: "basic",
      required: true,
    },
    favProducts: {type: Array, required: false}
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("Users",userSchema)

module.exports = User;