const mongoose = require('mongoose')
const User = require('../schema/User')
class UserModel {
    static async getUser ({_id}){
        console.log(_id)
        try {
            return User.findById({_id})
        } catch (error) {
            return error
        }
       
    }

    static async create({name,second_name,email,password}){

        try {
            const user = new User({
                name: name,
                second_name: second_name,
                email:email,
                password:password
            })
            const newUser = await user.save()
            return newUser
        } catch (error) {
            return error
        }
    }

    static async getUsers() {
        try {
          const users = await User.find()
          return users
        } catch (error) {
          throw new Error(`Error al obtener los usuarios: ${error.message}`)
        }
      }

      static async delete({_id}){
        return await User.findByIdAndDelete({_id})
      }
}

module.exports = UserModel