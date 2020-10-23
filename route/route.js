const express = require("express");
const router = express.Router();
//相当于后台的路由，所有的后台处理都需要从这里经过

const login = require("./login/login");

router.use("/login",login); 


module.exports = router;
