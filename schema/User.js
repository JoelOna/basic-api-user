const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    second_name: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El mail es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    }
  
},  { collection: "User", versionKey: false })


  
const User = mongoose.model('User', userSchema);


module.exports = User