var express = require("express");
var app = new express();
const route  = require("./route/route");

app.use("/api",route);


var hostName = '127.0.0.1';
var port = 8888;

app.listen(port, hostName, function () {
  console.log(`🚚...服务器运行在http://${hostName}:${port}`);
});
// 配置跨域
// app.all('*', function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//  res.header("X-Powered-By", ' 3.2.1')
//  res.header("Content-Type", "application/json;charset=utf-8");
//  next();
// });

