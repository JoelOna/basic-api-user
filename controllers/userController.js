const UserModel = require("../models/UserModel")
const bcrypt = require('bcrypt');
const User = require('../schema/User')
class UserController{

    static async getUser(req,res){
        const {_id} = req.params
        console.log(req.params)
            if (_id) {
                const user = await UserModel.getUser({_id})
                return res.json(user)  
            }
         
            return res.json({message:'Not found'})
    }

    static async create(req,res,next){
        const {name,second_name,email,password} = req.body          
        try {
            
            bcrypt.hash(password , 12)
            .then((hashedPassword)=>{
                const newUser = UserModel.create({name: name,second_name: second_name,email: email,password: hashedPassword})
                return res.json(newUser)
            
            })
            .catch((error)=>{
                console.log(error)
                next()
            })
          
            
        } catch (error) {
            console.log(error)
            return res.json(error)
        }
    }

    static async getUsers (req,res){
        const users = await UserModel.getUsers()
        return res.json(users)
    }

    static async delete (req,res){
        const {_id} = req.body
        if (_id) {
            const deletedUser = await UserModel.delete({_id})
            return res.json(deletedUser)
        }
        return res.json({message:'Not found'})
    }

    static async update(req,res,next){
        const {name,second_name,email,password} = req.body    
        console.log(password)     
        const {_id} = req.params
        const userBefore = User.findById({_id})
        try {
           const samePassword = bcrypt.compare(password, userBefore.password)
           if (!samePassword) {
            bcrypt.hash(password , 12)
            .then((hashedPassword)=>{
                const user = {name: name,second_name: second_name,email: email,password: hashedPassword}
                const userToUpdate = UserModel.updateUser({_id},{user})
                return res.json(userToUpdate)
            
            })
            .catch((error)=>{
                console.log(error)
                next()
            })
          
           }
           const user = {name: name,second_name: second_name,email: email,password: password}
           const userToUpdate = UserModel.updateUser({_id},{user})
           
            
        } catch (error) {
            console.log(error)
            return res.json(error)
        }
    }

}

module.exports = UserController