const express = require("express");

const { getUsers, addUser } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
    addUserValidators,
    addUserValidationHandler,
  } = require("../middlewares/users/userValidators");

const router = express.Router();

router.get("/", decorateHtmlResponse("Users"), getUsers);

router.post(
    "/",
    avatarUpload,
    addUserValidators,
    addUserValidationHandler, 
    addUser
    );

module.exports = router;