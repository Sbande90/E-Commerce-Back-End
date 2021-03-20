const orm = require("../config/orm");


var burger = require("../models/burger.js");



module.exports = (app)=>{
    app.get("/", (req, res)=>{
        burger.all((err, data)=>{
         if(err) console.log(err)
         var results = data;
         res.render("index", {
             data: results
         });
        });
     });

     app.post("/api/new-burger/:burgerName", (req, res)=>{
        var new_burger = req.params.burgerName;
        burger.create(new_burger);
        res.redirect("/");
    });

    app.get("/api/devoure/:id", function(req, res){
        var id = req.params.id;
        burger.devoure(id);
        res.redirect("/");

    })
};
