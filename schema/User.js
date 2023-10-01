const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

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

userSchema.pre('save', async (next)=>{
    const user = this
    if (!user.isModified('password')) return next();

    try {
      const salt = await bcrypt.genSalt(10); 
      const hashedPassword = await bcrypt.hash(user.password, salt); 
      user.password = hashedPassword; 
      next();
    } catch (error) {
      return next(error);
    }
})

  
const User = mongoose.model('User', userSchema);


module.exports = User