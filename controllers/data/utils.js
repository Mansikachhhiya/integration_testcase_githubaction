const {User, Product} = require("../../models");


const getUserById=(id) =>{
    return User.findOne({
        where: {id: id},
        include: [
            {
                model: Product
            }
        ]
    });
}
const getAllUser =()=>{
    return User.findAll({
        include: [
            {
                model: Product
            }
        ]
    });
}

const createUsers= async(args)=>{
        return User.create(args)

}
const deleteUser = async(id)=>{
    return User.destroy({
        where: {id: id}
    })
}
module.exports={
    getUserById,getAllUser,createUsers,deleteUser
}