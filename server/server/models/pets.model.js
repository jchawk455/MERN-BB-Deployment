const mongoose = require("mongoose");

const PetsSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Pet Name is required."],
        minlength: [3, "Pet Name must be at least 3 characters."],
        validate: {
            validator: (value)=>{
                //return true for valid and false for not valid
                return !value.toLowerCase().includes("bird");
            },
            message: " We do NOT have birds!!!"
        }

    },    
    type: {
        type: String,
        required: [true, "type is required"],
        minlength: [3, "Pet Name must be at least 3 characters."]
    },    
    description: {
        type: String,
        required: [true, "Description is required."],
        minlength: [3, "Description must be at least 3 characters."]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number
    }

    
}, {timestamps:true})

const Pets = mongoose.model("Pets", PetsSchema);

module.exports = Pets;