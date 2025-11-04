import mongoose from "mongoose";


const languageSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"], // The enum option restricts a field to specific values.
    required: true
  },
  scope: {
    type: [String], // array of strings
    required: true
  },
  duration: {
    type: String,
    required: true
  }
})

const LanguageModel = mongoose.model("languages", languageSchema)

export {LanguageModel} 
