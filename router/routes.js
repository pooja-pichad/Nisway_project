const express=require("express");
const { get_method, post_method, put_method, deleted, getdata_by_Industry } = require("../controller/get_post");
const router=express.Router();

router.post('/postdata',post_method)
router.get('/get_data',get_method)
router.get('/get_by_age/:Industry',getdata_by_Industry)
router.put("/putmethod/:Age",put_method)
router.delete('/deletemethod/:Industry',deleted)


module.exports={router}