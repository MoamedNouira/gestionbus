var User = require('../models/user.model.js');
var jwt = require('jsonwebtoken');

exports.register = function(req, res) {
  
    if(!req.body.email || !req.body.password || !req.body.nom || !req.body.prenom) {
        res.json({ success: false, message: 'Please enter email and password and nom,prenom .' });
      } else {
        var newUser = new User({
          nom:req.body.nom,
          prenom:req.body.prenom,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role

        });
    
        // Attempt to save the user
        newUser.save(function(err) {
          if (err) {
            return res.json({ success: false, message: 'That email address already exists.'});
          }
          res.json({ success: true, message: 'Successfully created new user.' });
        });
      }
};

exports.authenticate = function(req, res) {
    User.findOne({
  
      email: req.body.email
    }, function(err, user) {
      if (err) throw err;
  
      if (!user) {
        res.send({ success: false, message: 'Authentication failed. User not found.' });
      } else {
        // Check if password matches
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (isMatch && !err) {
            // Create token if the password matched and no error was thrown
            config = require('../../config/database.config');
            
            var token = jwt.sign(user.toJSON(), config.secret, {
                    
                
                expiresIn: 10080 // in seconds
            });
            res.json({ success: true, token: 'JWT ' + token ,role:user.role});
          } else {
            res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
          }
        });
      }
    });
  };


  exports.findAll = function(req, res) {
    User.find(function(err, allUser){
        if(err) {
            res.status(500).send({message: "Une erreur s'est produite lors de la récupération des User."});
        } else {
            res.send(allUser);
        }
    });
};


