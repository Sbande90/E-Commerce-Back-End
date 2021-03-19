const orm = require("../config/orm");

module.exports = (app)=>{
    app.get("/", (req, res)=>{
        orm.selectAll((err, data)=>{
         if(err) console.log(err)
         var results = data;
         res.render("index", {
             data: results
         });
        });
     });

     app.post("/api/new-burger/:burgerName", (req, res)=>{
        var new_burger = req.params.burgerName;
        orm.newBurger(new_burger);
        res.redirect("/");
    });
};
