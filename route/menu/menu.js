const express = require('express');
const router = express.Router();
const Mock = require('mockjs')
const menuJson = require('./menu.json')

router.get('/pcMenu', function (req, res) {
    let callback = req.query.callback;
    var result = {
        code: 200,
        flag: true,
        msg: 'GET请求成功',
        data: menuJson
        // data: [
        //     {
        //         "path": "/basic",
        //         "icon": "fund",
        //         "name": "basic",
        //         "routes": [
        //             {
        //                 "name": "organizationalStructure",
        //                 "path": "/basic/organizationalStructure",
        //                 "routes": [
        //                     {
        //                         "name": "companyManagement",
        //                         "path": "/basic/organizationalStructure/companyManagement"
        //                     },
        //                     {
        //                         "name": "departmentManagement",
        //                         "path": "/basic/organizationalStructure/departmentManagement"
        //                     },
        //                     {
        //                         "name": "addDepartment",
        //                         "path": "/basic/organizationalStructure/departmentManagement/add",
        //                         "hideInMenu": true
        //                     },
        //                     {
        //                         "name": "editDepartment",
        //                         "path": "/basic/organizationalStructure/departmentManagement/:id",
        //                         "hideInMenu": true
        //                     },
        //                     {
        //                         "name": "staffArchives",
        //                         "path": "/basic/organizationalStructure/staffArchives"
        //                     },
        //                     {
        //                         "name": "addStaffArchives",
        //                         "path": "/basic/organizationalStructure/staffArchives/add",
        //                         "hideInMenu": true
        //                     },
        //                     {
        //                         "name": "editStaffArchives",
        //                         "path": "/basic/organizationalStructure/staffArchives/:id",
        //                         "hideInMenu": true
        //                     }
        //                 ]
        //             },
        //             {
        //                 "name": "warehouseCenter",
        //                 "path": "/basic/warehouseCenter",
        //                 "routes": [
        //                     {
        //                         "name": "warehouse",
        //                         "path": "/basic/warehouseCenter/warehouse"
        //                     },
        //                     {
        //                         "name": "warehouseAdd",
        //                         "hideInMenu": true,
        //                         "path": "/basic/warehouseCenter/warehouse/:id"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "name": "merchantsData",
        //                 "path": "/basic/merchantsData",
        //                 "routes": [
        //                     {
        //                         "name": "merchantsClassify",
        //                         "path": "/basic/merchantsData/merchantsClassify"
        //                     },
        //                     {
        //                         "name": "merchantsFile",
        //                         "path": "/basic/merchantsData/merchantsFile"
        //                     },
        //                     {
        //                         "name": "merchantsAdd",
        //                         "hideInMenu": true,
        //                         "path": "/basic/merchantsData/merchantsFile/:id/merchantsAdd"
        //                     },
        //                     {
        //                         "name": "merchantsEdit",
        //                         "hideInMenu": true,
        //                         "path": "/basic/merchantsData/merchantsFile/:id/merchantsEdit"
        //                     },
        //                     {
        //                         "name": "merchantsAudit",
        //                         "hideInMenu": true,
        //                         "path": "/basic/merchantsData/merchantsFile/:id/merchantsAudit"
        //                     },
        //                     {
        //                         "name": "merchantsUpload",
        //                         "hideInMenu": true,
        //                         "path": "/basic/merchantsData/merchantsFile/:id/merchantsUpload"
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // ]
    };
    if (callback) {
        res.send(callback + '(' + JSON.stringify(result) + ')');
    } else {
        res.send(result);
    }
})


module.exports = router;

