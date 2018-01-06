var Bus = require('../models/bus.model.js');

exports.create = function(req, res) {
    if(!req.body.titre) {
        res.status(400).send({message: "contenu ne peux pas être vide"});
    }

    var bus = new Bus(req.body) ;
    
    

    bus.save(function(err, data) {
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
    Bus.find(function(err, allBus){
        if(err) {
            res.status(500).send({message: "Une erreur s'est produite lors de la récupération des Bus."});
        } else {
            res.send(allBus);
        }
    });
};

exports.findOne = function(req, res) {
    Bus.findById(req.params.busId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Impossible de récupérer le bus avec l'ID " + req.params.busId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    Bus.findById(req.params.busId, function(err, bus) {
        if(err) {
            res.status(500).send({message: "Impossible de trouver un bus avec l'id " + req.params.busId});
        }

        bus.titre = req.body.titre;
        bus.position.longitude=req.params.position.longitude;
        bus.position.latitude=req.params.position.latitude;


        bus.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Impossible de mettre à jour le bus avec id " + req.params.busId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    Bus.remove({_id: req.params.busId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Impossible de supprimer le bus avec id " + req.params.id});
        } else {
            res.send({message: "bus supprimé avec succès!"})
        }
    });
};

