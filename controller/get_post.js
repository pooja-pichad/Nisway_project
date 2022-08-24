var knex=require("../model/connection")
const bodyparser=require("body-parser")
var meraki_data=require("../csvjson.json");
const fs=require("fs")

const get_method=(req,res)=>{
    res.json(meraki_data)
}
const post_method=(req,res)=>{
    const data={
        Date: req.body.Date,
        Age: req.body.Age,
        Industry: req.body.Industry,
        Jobtitle: req.body.Jobtitle,
        Annualsalary:req.body.Annualsalary,
        Currency: req.body.Currency,
        Location:req.body.Location,
        Experience: req.body.Experience,
        AdditionalContext: req.body.AdditionalContext,
        OtherCurrency:req .body.OtherCurrency
    }
    knex('nisway_project').insert( data).then(()=>{
        fs.writeFileSync("csvjson.json",JSON.stringify(meraki_data,null,3))  
        res.send({message:"data post successfully"})
        console.log("Data inserted")
    }).catch((err)=>{
        console.log("Data does not inserted")
    })
}




const getdata_by_Industry=(req,res)=>{
    knex('nisway_project').select("*").where({Industry:req.params.Industry})
    .then((data)=>{
        res.send(data)

    })
}




const put_method=(req,res) =>{
    knex.from("nisway_project").where("Age","=",req.params.Age)
    .update({   Date: req.body.Date,
        Age: req.body.Age,
        Industry: req.body.Industry,
        Jobtitle: req.body.Jobtitle,
        Annualsalary:req.body.Annualsalary,
        Currency: req.body.Currency,
        Location:req.body.Location,
        Experience: req.body.Experience,
        AdditionalContext: req.body.AdditionalContext,
        OtherCurrency:req .body.OtherCurrency

                })
    .then((data)=>{
        fs.writeFileSync("csvjson.json",JSON.stringify(meraki_data,null,3))  
        res.send("data updated")
    }).catch((err)=>{
        console.log(err)
    })
    }




const deleted=(req,res)=>{
    knex.delete("*").from("nisway_project").where("Industry","=",req.params.Industry)
    .then((data)=>{
        fs.writeFileSync("csvjson.json",JSON.stringify(meraki_data,null,3))  
        res.send({message:"delete succesfully",data:data})
    }).catch((err)=>{
        res.send({message:"data delete"})
        console.log(err)
    })
}

module.exports={get_method,
            post_method,
            getdata_by_Industry,
            put_method,
            deleted}