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
exports.del = async (res, Model, data) => {
    try{
    id = data.id
    const model = await Model.deleteOne({_id: id});
    Model.findByIdAndRemove(id)
    res.send(model) 
    } catch (ex) {
        console.error(ex);
        res.sendStatus(500);
    }
}
exports.put = async (res, Model, data) => {
    try {
        res.status(200).send('zmiana');
    } catch (ex) {
        console.error(ex);
        res.sendStatus(500);
    }
}