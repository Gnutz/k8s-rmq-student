var mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema definition
let StudentSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    grade : {
        type: String,
        required: true
    }
});

mongoose.model('Student', StudentSchema, 'Students');