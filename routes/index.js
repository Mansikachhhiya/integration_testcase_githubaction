const {Router} =require("express");
const controllers= require("../controllers")
const router = Router();

router.post('/users', controllers.createUser)
     .get('/users',controllers.getAllUsers)
     .get('/users/:id',controllers.getUserBYId)

module.exports = router