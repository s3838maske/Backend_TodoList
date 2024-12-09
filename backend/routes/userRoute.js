const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

// EndPoint to create new user

router.post("/users", userController.addUser);
router.delete("/users/:id", userController.deleteUser);
router.put("/users/:id", userController.updateUser);
router.get("/getUsers", userController.fetchUserDetails);

module.exports = router;
