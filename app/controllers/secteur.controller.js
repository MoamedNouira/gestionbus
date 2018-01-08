var Secteur = require('../models/secteur.model.js');

exports.create = function(req, res) {
    if(!req.body.nom) {
        res.status(400).send({message: "nom  ne peux pas être vide"});
    }

    var secteur = new Secteur(req.body);

    secteur.save(function(err, data) {
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
    Secteur.find(function(err, secteurs){
        if(err) {
            res.status(500).send({message: "Une erreur s'est produite lors de la récupération des stations."});
        } else {
            res.send(secteurs);
        }
    });
};

exports.findOne = function(req, res) {
    Secteur.findById(req.params.SecteurId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Impossible de récupérer station avec l'ID " + req.params.secteurId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    Secteur.findById(req.params.SecteurId, function(err, secteur) {
        if(err) {
            res.status(500).send({message: "Impossible de trouver station avec l'id " + req.params.secteurId});
        }

        secteur.nom = req.body.nom;
        secteur.id_responsable = req.body.id_responsable;
        secteur.lignes=req.params.lignes;

        secteur.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Impossible de mettre à jour station avec id " + req.params.secteurId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    Secteur.findById(req.params.SecteurId, function(err, secteur) {
        if(err) {
            res.status(500).send({message: "Impossible de supprimer station avec id " + req.params.id});
        } else {
            res.send({message: "station supprimé avec succès!"})
        }
    });
};

exports.setLigne = function(req, res) {
    Secteur.findById(req.params.secteurId, function(err, secteur) {
        if(err) {
            res.status(500).send({message: "Impossible de trouver un secteur avec l'id " + req.params.secteurId});
        }

        secteur.lignes = req.body.lignes;

        secteur.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Impossible de mettre à jour le secteur avec id " + req.params.secteurId});
            } else {
                res.send(data);
            }
        });
    });
};

