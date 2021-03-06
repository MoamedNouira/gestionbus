var express = require('express');
var bodyParser = require('body-parser');

var morgan = require('morgan');  
var passport = require('passport');  
var jwt = require('jsonwebtoken');  
  var  dbConfig = require('./config/database.config.js');

var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'));  
// Initialize passport for use
app.use(passport.initialize());  

// Bring in defined Passport Strategy
require('./config/passport')(passport);  





mongoose.connect(dbConfig.url);
mongoose.connection.on('error', function() {
    console.log('Impossible de se connecter à la base de données. Quitter maintenant ...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Connecté avec succès de la base de données");
})




app.get('/', function(req, res){
    res.json({"message": "Bienvenue."});
});
require('./app/routes/bus.routes.js')(app);




app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});