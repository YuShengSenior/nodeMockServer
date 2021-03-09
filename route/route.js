const express = require("express");
const router = express.Router();
//相当于后台的路由，所有的后台处理都需要从这里经过

const login = require("./login/login");
const menu = require("./menu/menu");

router.use("/login",login); 
router.use("/menu",menu); 


module.exports = router;
