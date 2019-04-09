const mongoose = require('mongoose');

exports.create = async (res, Model, data) =>{
    const modelInstance = new Model(data);
    try{
        const result = await modelInstance.save();
        res.status(200).send(result);
    } catch (ex) {
        console.error(ex);
        res.sendStatus(500);
    }
}

exports.getAll = async (res, Model) => {
    try {
        const modelInstance = await Model.find();
        res.status(200).send(modelInstance);
    } catch (ex) {
        console.error(ex);
        res.sendStatus(500);
    }
}