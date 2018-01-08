var Ligne = require('../models/Ligne.model.js');



exports.create = function(req, res) {
    if(!req.body.titre) {
        res.status(400).send({message: "contenu ne peux pas être vide"});
    }

    var ligne = new Ligne(req.body) ;
   
    ligne.save(function(err, data) {
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
    Ligne.find(function(err, lignes){
        if(err) {
            res.status(500).send({message: "Une erreur s'est produite lors de la récupération des stations."});
        } else {
            res.send(lignes);
        }
    });
};

exports.findOne = function(req, res) {
    Ligne.findById(req.params.ligne_id, function(err, data) {
        if(err) {
            res.status(500).send({message: "Impossible de récupérer station avec l'ID " + req.params.stationId});
        } else {
            res.send(data);
        }
    });
};

exports.delete = function(req, res) {
    Ligne.remove({_id: req.params.ligne_id}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Impossible de supprimer le bus avec id " + req.params.id});
        } else {
            res.send({message: "bus supprimé avec succès!"})
        }
    });
};




     










