const express=require("express");
const { get_method,deleted, getdata_by_Industry, sort, get_singlerecord } = require("../controller/get_post");
const router=express.Router();


router.get('/get_data',get_method)         //its router for get all data
router.get('/get_by_indutry/:Industry',getdata_by_Industry) //its use for filter one or more filed
router.get("/getsinglerecord/:user_id",get_singlerecord)
router.get("/sort",sort)     // you can sort any field use of this route
router.delete('/deletemethod/:Industry',deleted) //you can delete any record



module.exports={router}