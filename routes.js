'use strict';

module.exports = function(app){
    var todoList = require('./controller');

    app.route('/ambildata/:id')
    .get(todoList.findUsers);

};