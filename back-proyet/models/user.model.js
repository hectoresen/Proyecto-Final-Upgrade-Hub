const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userEmailSchema = new Schema(
  {
    email: { type: String, required: true , unique:true},
    name: { type: String, required: true },
    code:{type:String ,required:false},
    status:{type:String ,required:false , default:'UNVERIFIED'}
  },
  {
    timestamps: true,
  }
);


 
const UserGmail = mongoose.model("usuario",userEmailSchema)
module.exports = UserGmail