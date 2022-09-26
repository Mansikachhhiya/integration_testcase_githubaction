const {Router} =require("express");
const controllers= require("../controllers/index")
const router = Router();

router.post('/users', controllers.createUser)
     .get('/users',controllers.getAllUsers)
     .get('/users/:id',controllers.getUserBYId)
     .delete("/users/:id",controllers.deleteuser)
module.exports = router