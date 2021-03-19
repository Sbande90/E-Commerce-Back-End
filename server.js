var express = require("express");

const path = require("path");

const connection = require("./config/connection");

const PORT = process.env.PORT || 8080;
const app = express();

// app.use(express.static(path.join(__dirname+ "/public")));
app.use("/public", express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main", layoutsDir:__dirname +  "/views/layouts",partialsDir:__dirname+"/views"}));

require("./route/router")(app);



app.listen(PORT, function(){
    console.log("server listening on: http://localhost:" + PORT);
})