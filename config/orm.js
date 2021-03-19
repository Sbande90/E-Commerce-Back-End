var connection = require("./connection.js");


var orm = {
    selectAll: (cb) => {
        connection.query('SELECT * FROM burgers', (err, data) => {
            if (err) cb(err, null);
            cb(null, data)
        });
    },
    devoure: (id) =>{
        connection.query('UPDATE burgers SET devoured = true WHERE id='+id, (err, data) => {
            if (err) console.log(err);
        });
    },
    delete: (id) =>{
        connection.query('DELETE FROM burgers WHERE id='+id, (err, data)=>{
            if (err) console.log(err);
        })
    },
    
    newBurger: (newName) =>{
        connection.query('INSERT INTO burgers (burger_name) VALUE("'+newName+'")', (err, data) => {
            if (err) console.log(err);
            console.log('INSERT INTO burgers (burger_name) VALUE('+newName+')');
        });
    }
}

module.exports = orm;