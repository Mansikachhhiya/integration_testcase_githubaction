const {User,Product} = require('../models');
// const {USER} = require("../config/dbConfig");

const createUser = async(req,res)=>{
    try{
        const user = await User.create(req.body);
            return res.status(201).json({
                user,
            });

    }catch (error){
        return res.status(404).json({error:error })
    }
}
const getAllUsers = async (req,res)=>{
    try {
        const users = await User.findAll({
            include: [
                {
                    model: Product
                }
            ]
        });
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getUserBYId = async(req,res)=>{
    try{
        const {id} = req.params;
        const Users = await User.findOne({
            where:{id:id},
            include:[
                {
                    model:Product
                }
            ]
        });
        if(Users){
            return res.status(200).json({Users});
        }
        return res.status(404).send('User with the specified  does not exits')
    }catch (error){
        return res.status(500).send(error);
    }
}
module.exports={
    createUser,getAllUsers,getUserBYId
}
