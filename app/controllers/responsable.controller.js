var Responsable = require('../models/responsable.model.js');

exports.create = function(req, res) {
  
    var responsable = new Responsable({nom: req.body.nom, secteur:req.body.secteur });

    responsable.save(function(err, data) {
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
    Responsable.find(function(err, allResponsable){
        if(err) {
            res.status(500).send({message: "Une erreur s'est produite lors de la récupération des Bus."});
        } else {
            res.send(allResponsable);
        }
    });
};

exports.findOne = function(req, res) {
    Responsable.findById(req.params.responsableId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Impossible de récupérer le bus avec l'ID " + req.params.responsableId});
        } else {
            res.send(data);
            res.status(500).send({message: "ok " + req.params.responsableId});
            
        }
    });
};

exports.update = function(req, res) {
    Responsable.findById(req.params.responsableId, function(err, responsable) {
        if(err) {
            res.status(500).send({message: "Impossible de trouver un bus avec l'id " + req.params.responsableId});
        }

        responsable.nom = req.body.nom;

        responsable.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Impossible de mettre à jour le bus avec id " + req.params.responsableId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    Responsable.remove({_id: req.params.Id}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Impossible de supprimer le bus avec id " + req.params.id});
        } else {
            res.send({message: "bus supprimé avec succès!"})
        }
    });
};

exports.setSecteur = function(req, res) {
    Responsable.findById(req.params.responsableId, function(err, responsable) {
        if(err) {
            res.status(500).send({message: "Impossible de trouver un bus avec l'id " + req.params.responsableId});
        }

        var findSecteur =  responsable.secteur;
        responsable.secteur = findSecteur.concat(req.body.secteur);

        responsable.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Impossible de mettre à jour le bus avec id " + req.params.responsableId});
            } else {
                res.send(data);
            }
        });
    });
};

