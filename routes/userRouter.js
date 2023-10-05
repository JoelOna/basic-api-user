const {Router} = require('express')
const UserController = require('../controllers/userController')

const userRouter = Router()

userRouter.get('/:_id', UserController.getUser)
userRouter.get('/', UserController.getUsers)
userRouter.post('/', UserController.create)
userRouter.delete('/', UserController.delete)
userRouter.put('/:_id', UserController.update)

module.exports =  userRouter