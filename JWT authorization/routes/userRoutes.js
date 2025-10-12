const express = require("express");
const { getUserProfile } = require("../controllers/user");
const { verifyToken } = require("../middleware/auth");

const router = express.Router();

router.get("/profile", verifyToken, getUserProfile);

module.exports = router;
