var express =  require("express");
var config = require("config");


var empsRouter = require("./routes/emps");
var adminRouter = require("./routes/admin");


var port =   parseInt(config.get("port"));
var app =  express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/emps", empsRouter);
app.use("/admin", adminRouter);

app.listen(port, ()=>{
    console.log("Server Started..");
});




