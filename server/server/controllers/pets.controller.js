const Pets = require("../models/pets.model");

module.exports.testResponse = (req,res)=>{
    res.json({message: "Hi!  Responding with pets from the controller!!!"})
}

module.exports.findAllPets = (req,res) => {
    Pets.find({})
        .then(results => res.json(results))
        .catch(err => res.status(400).json({message:"Didn't work",err}))
}

module.exports.newPet = (req,res) => {
    Pets.create(req.body)
        .then(results=> res.json(results))
        .catch(err=> res.status(400).json({message:"Didn't work",err}))
}

module.exports.findOnePet = (req,res) => {
    Pets.findOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err=> res.status(400).json({message:"Didn't work!!!",err}))
}

module.exports.deleteOnePet = (req,res) => {
    Pets.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err=> res.status(400).json({message:"Didn't work!!!",err}))
}

module.exports.updateOnePet = (req,res) => {
    Pets.updateOne({_id: req.params._id}, req.body, {runValidators:true})        
        .then(results => res.json(results))
        .catch(err=> res.status(400).json({message:"Didn't work!!!",err}))
}