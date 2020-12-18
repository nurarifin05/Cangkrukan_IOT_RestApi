'use strict';
var response = require('./res');
var connection = require('./conn');

exports.findUsers = function(req, res){
    var id=req.params.id;
    connection.query('SELECT * FROM reader WHERE ID_Reader = ?',[id],
    
    function(error, rows,fields){
        if(error){
            console.log(error)}
            else{
                    response.ok(rows, res)
            }
    });
};
