const express = require("express");
const signUpView = require("../views/SignUp");
const loginView = require("../views/LogIn");
const logoutView = require("../views/Logout");
const UserDataView = require("../views/UserData");

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./server/SQL/users.db");
const jwt = require('jsonwebtoken');

const router = express.Router();

console.log("calling signUpView.signUp");
router.post("/signup", signUpView.signUp);

console.log("calling loginView.loginUser");
router.post("/login", loginView.loginUser);

console.log("calling logoutView.logoutUser");
router.post("/logout", logoutView.logoutUser);

console.log("calling UserDataView.userData");
router.post("/userdata", UserDataView.userData);




module.exports = router;
