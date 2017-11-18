var Station = require('../models/station.model.js');

exports.create = function(req, res) {
    if(!req.body.lieu) {
        res.status(400).send({message: "lieu  ne peux pas être vide"});
    }

    var station = new Station({titre: req.body.titre , lieu: req.body.lieu});

    station.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Une erreur s'est produite lors de la création station."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    Station.find(function(err, stations){
        if(err) {
            res.status(500).send({message: "Une erreur s'est produite lors de la récupération des stations."});
        } else {
            res.send(stations);
        }
    });
};

exports.findOne = function(req, res) {
    Station.findById(req.params.StationId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Impossible de récupérer station avec l'ID " + req.params.stationId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    Station.findById(req.params.StationId, function(err, station) {
        if(err) {
            res.status(500).send({message: "Impossible de trouver station avec l'id " + req.params.stationId});
        }

        station.titre = req.body.titre;
        station.lieu = req.body.lieu;

        station.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Impossible de mettre à jour station avec id " + req.params.stationId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    Station.remove({_id: req.params.StationId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Impossible de supprimer station avec id " + req.params.id});
        } else {
            res.send({message: "station supprimé avec succès!"})
        }
    });
};

