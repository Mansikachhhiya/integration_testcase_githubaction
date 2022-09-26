
const {getUserById,getAllUser,createUsers, deleteUser} = require("./data/utils");
// const {USER} = require("../config/dbConfig");

const createUser = async (req, res) => {
    try {
        const user = await createUsers(req.body);
        if(user ){
            return res.status(201).send({user})
        }
    } catch (error) {
        return res.status(500).json({error: error})
    }
}
const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUser()
        return res.status(200).json({users});
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getUserBYId = async (req, res) => {
    try {
        const {id} = req.params;
        const Users = await getUserById(id);
        if (Users) {
            return res.status(200).json({Users});
        }
        return res.status(404).send('User with the specified  does not exits')
    } catch (error) {
        return res.status(500).send(error);
    }
}
const deleteuser=async(req,res)=>{
    try{
        const {id}= req.params;
        const deleted = await deleteUser(id);
        if (deleted) {
            console.log(deleted)
            return res.status(204).send("User deleted");
        }
        return res.status(404).send('User with the specified  does not exits')
        // throw new Error("user not found")
    }catch (error){
        console.log("Error occurred while deleting product", error);
        return res.status(500).send(error.message);
    }
}
module.exports = {
    createUser, getAllUsers, getUserBYId,
    deleteuser
}
