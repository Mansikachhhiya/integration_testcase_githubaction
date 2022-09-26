
const {getUserById,getAllUser,createUsers} = require("./data/utils");
// const {USER} = require("../config/dbConfig");

const createUser = async (req, res) => {
    try {
        const user = await createUsers(req.body);
        if(user ){
            return res.status(201).send({user})
        }
        return res.status(404).json({error: this.error})
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
        else{

        }
        return res.status(404).send('User with the specified  does not exits')
    } catch (error) {
        return res.status(500).send(error);
    }
}
module.exports = {
    createUser, getAllUsers, getUserBYId
}
