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
           return user.save()
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

    static async updateUser({_id}, input){
        try {
            // const user2 = new User({
            //     name: input.name,
            //     second_name: input.second_name,
            //     email: input.email,
            //     password: input.password
            // })
            
            // const user = await User.findById({_id})
            // console.log(user)
            // const userUpdated = await user.update(user2)
            // console.log(userUpdated)
            const userUpdated = await User.findOneAndUpdate({_id},input,{ new: true })
            console.log('User model to update: ',userUpdated)
            return userUpdated
         
        } catch (error) {
            return error
        }
    }
}

module.exports = UserModel