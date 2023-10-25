'use strict'

const mongoose = require('mongoose');
var StudentModel = new mongoose.model('Student');

function handleError(err){
    console.log("Error: ")
    console.log(err)
}

module.exports = {
    create: (id, newStudent) => {
        StudentModel.create(
            newStudent,
            function (err, created) {
                if (err) return handleError(err);
            });
    },
    edit: (id, student) => {
        StudentModel.findByIdAndUpdate(
            id,
            student,
            function (err, updated) {
                if (err) return handleError(err);
            });
    },
    delete: async (id, student) => {
        await StudentModel.findByIdAndDelete(id)
    },  
}
