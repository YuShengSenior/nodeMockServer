const express = require('express');
const router = express.Router();
const Mock = require('mockjs')
const Random = Mock.Random;

router.get('/userLogin', function (req, res) {
  let callback = req.query.callback;
  var result = {
    code: 200,
    flag: true,
    msg: 'GET请求成功',
    data: Mock.mock({
      "phoneNumber": /^1[3-9]\d{9}$/,
      "name": "@cname",
      "img": "@Image('100x100','@color','小甜甜')",
      "email": "@email",
      "countrysx": "@county(true)"
    })
  };
  if (callback) {
    res.send(callback + '(' + JSON.stringify(result) + ')');
  } else {
    res.send(result);
  }
})


module.exports = router;

