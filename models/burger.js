var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        console.log("here");
        orm.selectAll(function(err, res){
            console.log("here1", res);
            cb(err, res);
        });
    },
    create: function (name) {
        orm.newBurger(name);
    },
    devoure: function(id){
        orm.devoure(id);
    }
};

module.exports = burger;