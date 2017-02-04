var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */
app.get('/',function(req,res){
	// when the reguest is get then 
	// I have to display all users stored in my database
	res.render('/user')
})


module.exports = { 
  app: app,
  User: User
};
