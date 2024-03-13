var express = require('express');
var router = express.Router();
var pool = require('./pool');


router.post('/submit_client',function(req,res,next){

  try
  {

    pool.query("insert into client (clientname,lastname,email,mobileno,projectname) values(?,?,?,?,?)",[req.body.clientname,req.body.lastname,req.body.email,req.body.mobileno,req.body.projectname,req.body.clientid],function(error,result){
      if(error)
      {
        res.status(200).json({status:false,message:'Server Error: Pls Contact Database Administrator.....'})
      }
      else
      {
        res.status(200).json({status:true,message:'Client Data Submitted Successfully...'})
      }
    })
    
  } 
  catch(e)
  {
    res.status(200).json({status:false,message:'Server Error: Pls Contact Server Administrator.....'})
  } 

});

router.get('/display_all_client',function(req,res){
  try
  {
    pool.query("select * from client",function(error,result){
      if(error)
      {
        console.log(error)       
          res.status(200).json({status:false,message:'Server Error:Pls Contact Database Administrator.....'})
      }
      else
        {
          res.status(200).json({status:true,message:'Success',data:result}) 
          
        }

    })
  }
  catch(e)
  {
    res.status(200).json({status:false,message:'Server Error:Pls Contact Database.....'})
  }
});

 router.post('/edit_client_data',function(req,res,next){
  try
  {
    pool.query("update client set clientname=? ,lastname=? ,email=? , mobileno=?, projectname=? where clientid=?" ,[req.body.clientname,req.body.lastname,req.body.email,req.body.mobileno,req.body.projectname,req.body.clientid],function(error,result){
      if(error)
      {
        res.status(200).json({status:false,message:'Server Error: pls contact Database Administrator.....'})
      }
      else
      {
        res.status(200).json({status:true,message:'Client Data Updated Successfully.....'})
      }
    } )
  }
  catch(e)
  {
    res.status(200).json({status:false,message:'Server Error: Pls Contact Server Administrator.....'})
  }
 });



 router.post('/delete_client',function(req,res,next){
  try
  {
    pool.query("delete from client where clientid=?",[req.body.clientid],function(error,result){
      if(error)
      {
        res.status(500).json({status:false,message:'Server Error: pls contact Database Administrator.....'})
      }
      else
      {
        res.status(200).json({status:true,message:'Client Data Deleted Successfully.....'})
      }
    } )
  }
  catch(e)
  {
    res.status(400).json({status:false,message:'Server Error: pls contact Database Administrator.....'})
  }
 });

module.exports = router;