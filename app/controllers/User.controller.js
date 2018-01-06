var Bus = require('../models/User.model.js');

exports.create = function(req, res) {
    if(!req.body.nom) {
        res.status(400).send({message: "contenu ne peux pas être vide"});
    }

    var user = new User(req.body) ;
    
    

    user.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Une erreur s'est produite lors de la création du bus."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    user.find(function(err, allusers){
        if(err) {
            res.status(500).send({message: "Une erreur s'est produite lors de la récupération des Bus."});
        } else {
            res.send(allusers);
        }
    });
};

exports.findOne = function(req, res) {
    user.findById(req.params.UserId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Impossible de récupérer le bus avec l'ID " + req.params.busId});
        } else {
            res.send(data);
        }
    });
};



exports.delete = function(req, res) {
    user.remove({_id: req.params.UserId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Impossible de supprimer le bus avec id " + req.params.id});
        } else {
            res.send({message: "bus supprimé avec succès!"})
        }
    });
};

