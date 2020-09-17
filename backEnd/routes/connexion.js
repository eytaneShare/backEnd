var express = require("express");
var router = express.Router();
 
var getUsers = require('../public/javascripts/found').getUser
router.get("/", function(req, res, next) {

    // ((result) => {
    //   res.send(result)
    // })
    res.send("hi")
  
    
});
router.post("/", function(req,res){
    getUsers((users) => {
        let result = users.find(pro => pro.userName==req.body.userName);
        if (result){
            if (result.password == req.body.password){
                res.status(200).send({
                    message:"ok "
                })  }else{
                    res.status(200).send({
                        message:"incorect password"
                })
    
                }
        }else{
            res.status(200).send({
                message:"user not found"
            })
        }
    })
    
})

module.exports = router;