const mongoose = require("mongoose")


const EntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 1,
      maxLength:60,
    },

    author:{
      type: String,
      required:true,
      minLength: 4,
      maxLength:50,

    },
    
    content:{
      type: String,
      required:true,
      minLength: 1,
      maxLength:1500,

    },
   

  },
  { timestamps: true }
);

module.exports = mongoose.model("Entry", EntrySchema);