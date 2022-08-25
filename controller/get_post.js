var knex=require("../model/connection")
const bodyparser=require("body-parser")
var Data=require("../csvjson.json");
var req=require("readline-sync")
var choice_of_field=req.question("Which field you want to sort from given data :  ")


//get all the record given data

const get_method=(req,res)=>{
    res.json(Data)
}


// Filter by one or more fields (by industry fields)
const getdata_by_Industry=(req,res)=>{
    knex('nisway_project').select("*").where({Industry:req.params.Industry})
    .then((data)=>{
        res.send(data)

    })
}

// fetch single record by id
const get_singlerecord=(req,res)=>{
    knex('nisway_project').select("*").where({user_id:req.params.user_id})
    .then((data)=>{
        res.send(data)

    })
}


//its for delete any data
const deleted=(req,res)=>{
    knex.delete("*").from("nisway_project").where("Industry","=",req.params.Industry)
    .then((data)=>{
        res.send({message:"delete succesfully",data:data})
    }).catch((err)=>{
        res.send({message:"data delete"})
        console.log(err)
    })
}

//Sort by one or more fields/attributes
const sort=(req,res)=>{
knex.select().table('nisway_project').orderBy(choice_of_field, 'desc')
    .then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send({message:err})
    })
}



module.exports={get_method,
            getdata_by_Industry,
            deleted,
            sort,
            get_singlerecord}