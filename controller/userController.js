var express = require('express');
var mysql = require('mysql2');
var cors = require('cors');
var bodyparser = require('body-parser');

const UserModal = require("../model/userModel")

const userController={


  async createUser(req,res){

    let userData = req.body;

    let[User]=await UserModal.CreateUser(userData)
    console.log(User);
    if(User){
      console.log("Data inserted");
      res.send("Data inserted");
    }
    else{
      console.log("Error");
    }
},
async getAllUser(req,res){

  let getAllUser = await UserModal.GetAllUser();
  if(getAllUser[0].length){
    console.log("Done");
    res.send(getAllUser[0]);
  }
  else{
    console.log("Error");
  }
},
async getUser(req,res){

  let data ={"user_id":req.params.id};
  let getinUser = await UserModal.getUser(data);

  if(getinUser){
    res.send(getinUser[0]);
  }

},
async updateUser(req,res){

  let data ={"user_id":req.params.id,"user_name":req.body.user_name};

  console.log(data);
  let getinUser = await UserModal.updateUser(data);

  if(getinUser){
    res.send(getinUser[0]);
  }

},

 
}

module.exports=userController;