const express = require("express");
const asyncHandler = require("express-async-handler");
const userCtrl = require("../controllers/users.controller");

const router = express.Router();
module.exports = router;

router.post("/", asyncHandler(userCtrl.createUser));
