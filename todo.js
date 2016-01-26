var express=require("express");
var router=express.Router();

var todolist=[
    {id:1,desc:'第一件事儿'},
    {id:2,desc:'第二件事'},
    {id:3,desc:'lalalal'}
];

router.get("/",function(req,res){
    //res.send("hello world!");
    res.render('index',{
        title:"代办事务列表",
        newtodo:todolist
    });
    
});
router.post("/add",function(req,res){
    todolist.push(
        {id:todolist.length+1,
        desc:req.body.addnew       
        }
    );
    res.redirect('/');
    
})
module.exports=router;