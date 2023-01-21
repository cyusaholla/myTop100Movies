const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userName: String,
    email: {
        type: String
    },
    password: String, 
}, {timestamps: true});



export default mongoose.model("user", userSchema);

