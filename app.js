var express=require("express");
var path=require("path");
var app=express();
var bodyparser=require("body-parser");
//configuration apps
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//加入获得request body的中间件
app.use(bodyparser());
//加入获得静态资源的中间件
app.use(express.static(path.join(__dirname,'bower_components')));

app.use(require('./todo'));

app.listen("3333",function(){
    console.log("I am stating");
});