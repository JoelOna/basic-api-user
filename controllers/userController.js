const UserModel = require("../models/UserModel")

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

    static async create(req,res){
        const {name,second_name,email,password} = req.body
        
        try {
            const newUser = await UserModel.create({name,second_name,email,password})
            return res.json(newUser)
        } catch (error) {
            return res.json({message:'Not created'})
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
}

module.exports = UserController