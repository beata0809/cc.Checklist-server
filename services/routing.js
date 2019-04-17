const mongoose = require('mongoose');

exports.create = async (res, Model, data) =>{
    const model = new Model(data);
    try{
        const result = await model.save();
        res.status(200).send(result);
    } catch (ex) {
        console.error(ex);
        res.sendStatus(500);
    }
}
exports.getAll = async (res, Model) => {
    try {
        const model = await Model.find();
        res.status(200).send(model);
    } catch (ex) {
        console.error(ex);
        res.sendStatus(500);
    }
}

exports.getById = async (res,Model,id) => {
    try{
        const modelInstance= await Model.findById(id);
        res.status(200).send(modelInstance);
    } catch (ex){
        console.log(ex);
        res.sendStatus(500);
    }
}

exports.deleteById = async (res, Model, id) => {
    try {
        const modelInstance = await Model.findByIdAndDelete(id);
        res.status(200).send(modelInstance);
    } catch (ex) {
        console.log(ex);
        res.sendStatus(500);
    }
}

exports.updateModel= async(res,Model,data,id) => {
    try{
        const modelInstance = await Model.findById(id);
        for (key of Object.keys(data))
        {
        modelInstance[key] = data[key];
        }
        const result = await modelInstance.save();
        res.status(200).send(result);
    } catch(ex){
        console.log(ex);
        res.sendStatus(500);
    }
}

exports.deleteModel =async(res,Model) => {
    try{
    const modelInstance = await Model.remove();
     res.status(200).send(modelInstance);
    } catch (ex){
        console.log(ex);
        res.sendStatus(500);
    }
}

